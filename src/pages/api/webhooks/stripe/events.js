import Stripe from 'stripe';
import { fetchAPI } from 'util/api';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: process.env.STRIPE_API_VERSION
});

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function onChargeSucceeded(req, res) {
  if (req.method === 'POST') {
    const buffers = []
    const signature = req.headers['stripe-signature'];

    for await (const chunk of req) {
      buffers.push(chunk);
    }

    const data = Buffer.concat(buffers).toString();
    const event = constructEvent(data, signature, endpointSecret);
    
    if (!event) {
      res.status(400).send(`Webhook error: ${err.message}`);
    }
    
    await handleStripeEvent(event);
    res.send();
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}

function constructEvent(body, signature, endpointSecret) {
  try {
    return stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch(err) {
    console.log(err);
    return;
  }
}

async function handleStripeEvent(event) {
  switch (event.type) {
    case 'charge.succeeded':
      await updateSchedule(event.data?.object?.metadata);
      break;
    default:
      console.log(`Unhandle event type ${event.type}`);
  }

  return event.type;
}


async function updateSchedule(metadata) {
  if (!metadata) {
    return false;
  }

  const { scheduleId, availableSeats } = metadata;
  try {
    return await fetchAPI(`/schedules/${scheduleId}`, undefined, {
      method: 'PUT',
      body: JSON.stringify({ data: { availableSeats: Number(availableSeats) - 1 } })
    });
  } catch(err) {
    console.log(err);
    throw err;
  }
}