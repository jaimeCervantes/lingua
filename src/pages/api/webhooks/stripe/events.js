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

export default async function onStripeEvent(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
    return;
  }

  let event;
  try {
    event = await handleStripeRequest(req);
  } catch(err) {
    console.log(err);
    res.status(400).send(`Webhook error: ${err.message}`);
    // @TODO: notify to linguallama about the error, availableSeats cannot be updated
    return;
  }

  try {
    await doActionBasedOnEvent(event);
  } catch(err) {
    console.log(err);
    // @TODO: notify to linguallama about the error, availableSeats cannot be updated
  }
  // retun a 200 response
  res.send();
}


async function handleStripeRequest(req) {
  const signature = req.headers['stripe-signature'];
  const body = await transformStreamToJSON(req);
  const event = constructEvent(body, signature, endpointSecret);
  
  if (!event) {
    return false;
  }
  
  return event
}

async function transformStreamToJSON(req) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  return Buffer.concat(buffers).toString();
}

function constructEvent(body, signature, endpointSecret) {
  try {
    return stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch(err) {
    console.log(err);
    return;
  }
}

export async function doActionBasedOnEvent(event) {
  if (!event) {
    return;
  }

  switch (event.type) {
    case 'charge.succeeded':
      await updateSchedule(event.data?.object?.metadata);
      break;
    case 'invoice.payment_succeeded':
      await updateSchedule(event.data?.object?.lines?.data[0]?.metadata);
      break;
    default:
      console.log(`Unhandle event type ${event.type}`);
  }

  return event.type;
}


export async function updateSchedule(metadata) {
  if (!metadata?.scheduleId) {
    return;
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