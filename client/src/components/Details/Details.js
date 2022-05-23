import React from 'react';
import './Details.scss';
import { Link } from 'react-router-dom';
import Datepicker from '../DatePicker/Datepicker';

export const Details = () => {
  return (
    <main className="details-container">
      <section className="details-contents">
        <section className="details-left">
          <section className="booking-details">
            <article className="date-picker">
              <div className="date-wrapper">
                <div className="booking-text">
                  <h3>Confirm Reservation</h3>
                  <h2>予約内容確認</h2>
                </div>
                <div className="calendar-component">
                  <Datepicker/>
                </div>
              </div>
              
              
            </article>
            <article className="booking-confirm">
              <div className="vertical-placeholder"></div>
              <div className="booking-wrapper">
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
                  <div className='policy-text'>
                    <p>Cancellation Policy</p>
                    <p>※ 100% money back guarantee if cancelled at least 3 days before the booked date.  </p>
                  </div>
                </article>
              </div>
              
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
        <section className="details-right">
          <article className="details-confirm">
            <h2>Booking Details</h2>
            <hr/>
            <article className="confirm-section">
              <h3>Indoor basketball court 
              in Shinagawa</h3>
              <h4>Tokyo Shingawa 1-1-1</h4>
            </article>
            <hr/>
            <ul className="confirm-list">
              <li className="confirm-item">
              Duration <span>9:00~15:00 PM</span>
              </li>
              <li className="confirm-item">
              Guests<span>6 Guests</span>
              </li>
              <li className="confirm-item">
              Package <span>Equipment</span>
              </li>
            </ul>
            <hr/>
            <article className="details-buttons">
              <button>
                <Link to='/payment'>
                  Continue to payment
                </Link>
              </button>
              <button>Contact the host</button>
            </article>
          </article>
          
        </section>
      </section>
      
    </main>
  )
}

