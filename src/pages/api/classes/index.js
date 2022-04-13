import Stripe from 'stripe';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export default async function getProducts(req, res) {
  if (req.method === 'GET') {

  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method not allowed');
  }
}