import Stripe from 'stripe';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: process.env.STRIPE_API_VERSION
});

export default async function paymentHandler(req, res) {
  if(req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: req.body.priceId,
            quantity: 1,
            description: req.body.description
          }
        ],
        metadata: JSON.parse(req.body.metadata),
        mode: 'payment',
        success_url: `${req.headers.origin}/premium-classes/payment/?success=true`,
        cancel_url: `${req.headers.origin}/premium-classes/payment/?canceled=true`,
      });

      res.redirect(303, session.url)
    } catch(err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}