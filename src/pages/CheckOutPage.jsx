// src/pages/CheckOutPage.jsx

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Rm9G4PB2zQSdulddJOE6G7Z0C6PHJRk87Mjuo9Y7pLBMUQVnqBpO25b2XvnrFnvlSQm4Ieg9KXQtFSlwKFi7glU00MwNUxq7a'); // replace with your actual publishable key

function CheckOutPage() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Stripe Checkout Example</h1>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  );
}

export default CheckOutPage;
