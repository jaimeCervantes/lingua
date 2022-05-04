import Stripe from 'stripe';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: process.env.STRIPE_API_VERSION
});

export default async function paymentHandler(req, res) {
  if(req.method === 'POST') {
    try {
      const session = await createCheckout(req.body, req.headers);

      res.redirect(303, session.url);
    } catch(err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

async function createCheckout(body, headers) {
  let session;
  
  try {
    session = await createStripeCheckoutSession(body, headers)
  } catch(err) {
    console.log(err);
    throw err;
  }

  return session;
}

async function createStripeCheckoutSession(body, headers) {
  return await stripe.checkout.sessions.create({
    line_items: [
      {
        price: body.priceId,
        quantity: 1,
        description: body.description
      }
    ],
    metadata: JSON.parse(body.metadata),
    payment_intent_data: {
      metadata: JSON.parse(body.metadata)
    },
    mode: 'payment',
    success_url: `${headers.origin}/premium-classes/payment/?success=true`,
    cancel_url: `${headers.origin}/premium-classes/payment/?canceled=true`,
  });
}