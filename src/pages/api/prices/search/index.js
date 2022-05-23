import Stripe from 'stripe';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: process.env.STRIPE_API_VERSION
});

export default async function getPrices (req, res) {
  if (req.method === 'GET') {
    try {
      const response = await stripe.prices.search({ query: `product: "${req.query.id}"` });
      res.status(200).json(response);
    } catch(err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}