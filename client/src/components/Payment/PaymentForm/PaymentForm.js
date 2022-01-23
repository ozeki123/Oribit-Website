import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PaymentConfirm from '../PaymentConfirm/PaymentConfirm';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/confirm";

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('hello');
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    console.log(paymentMethod);
    navigate(from, { replace: true });

    if(error){
      console.log(error);
    }

    // sessionStorage.setItem(paymentMethod);
    //get item by id
    
    
  }
  return (
    <div>
      <h1>payment form works!</h1>
      <form onSubmit={handleSubmit}>
        <CardNumberElement/>
        <CardExpiryElement/>
        <CardCvcElement/>
        <button type='submit'>
            Submit Payment
        </button>
      </form>
    </div>
  )
}

export default PaymentForm;
