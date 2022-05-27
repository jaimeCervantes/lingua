import Stripe from 'stripe';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: process.env.STRIPE_API_VERSION
});

export async function getClasses() {
  return await stripe.products.search({
    query: `active:'true' AND metadata['type']:'class'`,
    limit: 20
  });
}