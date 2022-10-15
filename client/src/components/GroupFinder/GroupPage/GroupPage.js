import React from "react";
import { useLocation } from "react-router-dom";
import "./GroupPage.scss";
import GroupImage from "../../../assets/images/05_Marathon_Group.jpg";
import  eventImage from "../../../assets/images/pietro-rampazzo-x5GcXFvJJhI-unsplash.jpg";
import  {ReactComponent as HeartIcon} from "../../../assets/icons/8725991_heart_icon.svg";
import {ReactComponent as UserIcon} from "../../../assets/icons/4964053_avatar_icon.svg";
import eventImage2 from "../../../assets/images/kyle-kranz-W2TqzejmjJw-unsplash.jpg";
import {ReactComponent as TimeIcon} from "../../../assets/icons/time-icon.svg";
import {ReactComponent as PaymentIcon} from "../../../assets/icons/payment-icon.svg";
import {ReactComponent as LostIcon} from "../../../assets/icons/lost-icon.svg";
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus.svg";

const GroupPage = (props) => {
  const location = useLocation();
  const data = location.state.group;
  console.log(data);

  return (
    <div className="group-page-container">
      <div className="group-page-wrapper">
        <div className="group-page-contents">
          <div className="group-page-info">
            <div className="group-page-top">
              <p className="group-page-nav">Groups <span>{">"}</span> {data.title}</p>
            </div>
            <section className="group-page-image">
              <img src={GroupImage}/>
            </section>
            <section className="group-toolbar">
              <div className="group-info">
                <p><span>Organizer</span>{data.owner}</p>
                <div className="group-members">
                  <span><UserIcon/></span>
                  <span><p>23 Members</p></span>
                </div>
              </div>
              <div className="group-buttons">
                <button className="like-button">
                  <HeartIcon/>
                </button>
                <button className="join-button">Join Group<PlusIcon/></button>
              </div>
              
            </section>
            <section className="group-page-details">
              <h1>{data.title}</h1>
              <p>We are a marathon training group that gathers every sunday. If you like running while enjoying incredible views, feel free to join us. <br/> <br/>We will provided water, but please bring your own just in case we run out. This event is completely free, but you can choose to spend money on things we see along the way.</p>
            </section>
          </div>
          
        </div>
        <div className="group-page-sidebar">
          <div className="group-reminders">
            <div className="section-title">
              <h2>Upcoming events</h2>
              <p>All events</p>
            </div>
            
            <div className="group-events">
              <div className="event">
                <div className="event-contents">
                  <div className="event-image">
                    <img src={eventImage}/>
                  </div>
                  <div className="event-details">
                    <div className="event-heading">
                      <p>Tokyo, Mita</p>
                      <h3>Late night 5v5 pickup </h3>
                      <p>Intermediate, Advanced</p>
                    </div>
                    
                    <div className="event-info">
                      <p className="event-date">September 11</p>
                      <p>15</p>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="event">
                <div className="event-contents">
                  <div className="event-image">
                    <img src={eventImage2}/>
                  </div>
                  <div className="event-details">
                    <div className="event-heading">
                      <p>Tokyo, Mita</p>
                      <h3>Late night 5v5 pickup </h3>
                      <p>Intermediate, Advanced</p>
                    </div>
                    
                    <div className="event-info">
                      <p className="event-date">September 11</p>
                      <p>15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-announcements">
            <div className="section-title">
              <h2>Announcements</h2>
              <p>View all</p>
            </div>
            
            <div className="group-posts">
              <div className="post">
                <div className="post-contents">
                  <TimeIcon/>
                  <p>Upcoming event</p>
                </div>
                <div className="post-date">
                  <p>September 21 at 15:00</p>
                </div>
              </div>
              <div className="post">
                <div className="post-contents">
                  <LostIcon/>
                  <p>Tournament registration</p>
                </div>
                <div className="post-date">
                  <p>November 6 at 15:00</p>
                </div>
              </div>
              <div className="post">
                <div className="post-contents">
                  <PaymentIcon/>
                  <p>Payment deadline</p>
                </div>
                <div className="post-date">
                  <p>September 21 at 15:00</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default GroupPage;
