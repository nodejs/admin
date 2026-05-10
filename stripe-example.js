require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent() {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000, // $20.00
      currency: 'usd',
    });
    
    console.log('Payment Intent created:', paymentIntent.id);
    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error.message);
  }
}

// Example usage
createPaymentIntent();
