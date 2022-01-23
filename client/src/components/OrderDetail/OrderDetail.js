import React from 'react';
import './OrderDetail.scss';
import { Link } from 'react-router-dom';
import DatePicker from '../DatePicker/Datepicker';

function OrderDetail() {
  return (
    <div>
      <h1>Order detail works</h1>
      <DatePicker/>
      <button>
        <Link to='/payment'>
          Continue to payment
        </Link>
      </button>
    </div>
  )
}

export default OrderDetail;
