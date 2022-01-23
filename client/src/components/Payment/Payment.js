import React from 'react';
import './Payment.scss';
import PaymentForm from './PaymentForm/PaymentForm';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe('pk_test_51KKekXGDtVX5wZUmoem8hYWx1aOdupnY8mgqvCfecD0Hn8iu4BfMSgLDuhKuwwR9ngCdXf73GCh7XM5rPTN9F19000nNQl8J1j');

  return (
      <Elements stripe={stripePromise}>
        <PaymentForm/>
      </Elements>
      
  )
}

export default Payment;
