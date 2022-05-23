import React from 'react';
import './OrderDetail.scss';
import { Link } from 'react-router-dom';
import DatePicker from '../DatePicker/Datepicker';

function OrderDetail() {
  return (
    <main className="order-container">
      <div className="order-contents">
        <section className="left-section">
          <h3>Booking Details</h3>
          <h1>予約内容の確認</h1>
          <section className="date-section">
            <div className="date-picker">
              <DatePicker />
            </div>
            
            <article className="order-details">
              <article className='date-input'>
                <label>Reservation time</label>
                <input placeholder='Select check in date'></input>
              </article>
              <div className="date-details">
                <article className="time-input">
                  <label>Check in time</label>
                  <input placeholder='Select check in time'></input>
                </article>
                <article className="time-input">
                  <label>Check out time</label>
                  <input></input>
                </article>
              </div>
              <article className="guest-input">
                <label>Guests</label>
                <input placeholder='2 Guests'></input>
              </article>
              <hr/>
              <article className="cancel-policy">
                <p>Cancellation Policy</p>
                <p>※ 100% money back guarantee if cancelled at least 3 days before the booked date.  </p>
              </article>
            </article>
            
          </section>
          <section className="plan-section">
            <article className="plan-detail">
              <h5>Standard Package</h5>
              <h6>Access to facilities. Equipment will 
              not be included in this package 
              (see Equipment Package).</h6>
            </article>
            <article className="plan-detail">
              <h5>Equipment Package</h5>
              <h6>Access to facilities. Equipment will 
              not be included in this package 
              (see Equipment Package).</h6>
            </article>
          </section>
        </section>
        <section className="right-section">
          <h2>Booking Details</h2>
          <article>
            <h5>Indoor basketball court 
            in Shinagawa</h5>
            <h6>Tokyo Shingawa 1-1-1</h6>
          </article>
          <article>
            <p>
            Duration <span>9:00~15:00 PM</span>
            </p>
            <p>
            Guests<span>6 Guests</span>
            </p>
            <p>
            Package <span>Equipment</span>
            </p>
          </article>
          <article className="order-buttons">
            <button>
              <Link to='/payment'>
                Continue to payment
              </Link>
            </button>
            <button>Contact the host</button>
          </article>
        </section>
      </div>
      
    </main>
  )
}

export default OrderDetail;
