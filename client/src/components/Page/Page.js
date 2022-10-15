import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Page.scss";
import DatePicker from '../DatePicker/Datepicker';
import { Dropdown } from '../Dropdown/Dropdown';
import locationIcon from "../../assets/icons/location.png";
import checkIcon from "../../assets/icons/icons8-today-26.png";
import heartIcon from "../../assets/icons/heart-svgrepo-com.svg";
import foodIcon from "../../assets/icons/food.svg";
import userIcon from "../../assets/icons/user-profile.png";

function Page(props) {
  const { id } = useParams();

  const [items, setItems] = useState([{}]);
  const [selectedItem, setSelectedItem] = useState({});

  const timeArr = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00","16:00", "17:00", "18:00", "19:00", "20:00", "21:00", 
  "22:00", "23:00"] ;

  const guestArr = ["1", "2", "3", "4", "5", "6", "7", "8","9","10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

  const amenityArr = ["Wifi", "Changing Room", "Sauna", "Towels", "Bathrooms", "Showers", "Hair drier"]

  const packageArr = [{"title":"Includes food", "type":"food", "desc":"Food and drinks can be delivered or prepared for before your arrival."}, {"title": "Access to facilities", "type":"facility","desc": "Gain access to other facilities provided by the owner."}, {"title": "Includes equipment", "type": "equipment","desc": "Equipment can be rented."}, {"title": "Includes drinks", "type":"drinks"}]

  const imgArr = ["pool-1 (1).jpg", "pool-2.jpg", "pool-3.jpg"]
  
  const getItems = () => {
    axios.get(`/items/${id}`)
      .then((res)=> {
        const myItems = res.data;
        setItems(myItems);
        console.log(myItems);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    sessionStorage.setItem('item', JSON.stringify(items));
    // const submittedData = sessionStorage.getItem('item');
    // const newData = JSON.parse(submittedData)
    // console.log(newData._id);
  }

  useEffect(() => {
    getItems();
  }, []);

  
  
  return(
    <div className="page-container">
      <div className="page-wrapper">
        <section className="page-title">
          <div className="title-heading">
            <h1>{items.title}</h1>
            <div className="title-subheading">
              <p>4.84<span>(50)</span></p>
              <p>・</p>
              <p>Swimming</p>
            </div>
          </div>
          <div className="title-util">
            <div className="share-util">
              <p>Share</p>
            </div>
            <div className="fav-util">
              <p>Save</p>
            </div>
          </div>
          <div></div>
        </section>
        <div className="page-util">
          <div className="page-heading">
            <p>Space</p>
            <p>{">"}</p>
            <p>{items.title}</p>
          </div>
          <div className="save-util">
            <img src={heartIcon}/>
            <p>Save</p>
          </div>
        </div>
        
        <section className="page-images">
          <div className="images-left">
            <img src={require(`../../assets/images/${imgArr[0]}`)}/>
          </div>
          <div className="images-right">
            <div className="right-top">
              <img src={require(`../../assets/images/${imgArr[1]}`)}/>
            </div>
            <div className="right-bottom">
              <img src={require(`../../assets/images/${imgArr[2]}`)}/>
            </div>
          </div>
        </section>
        <section className="page-details">
          <div className="details-contents">
            <section className="details-heading">
              <div className="heading-content">
                <h2>{items.title}</h2>
                <div className="details-location">
                  <img src={locationIcon} alt="location"/>
                  <p>{items.location}</p>
                </div>
              </div>
              <div className="details-owner">
                <div className="owner-info">
                  <img src={userIcon}/>
                  <div className="owner-details">
                    <p>Owner</p>
                    <p>{items.owner}</p>  
                  </div>
                </div>
              </div>
            </section>
            <div className="details-main">
              <section className="details-desc">
              
                <h3>About the space</h3>
                <p>Luxury outdoor swimming pool located in Okinawa, Naha. You will have the entire pool to yourself.  The pool is located in Onna, Okinawa, and is about a 30 minute drive from the airport.

                Food and drink service is available by phone. If you let us know in advance,we will prepare food and drinks before your arrival for an additional price. </p>
              </section>
              <section className="details-packages">
                <h3>Packages</h3>
                <ul className="packages-list">
                  {
                    packageArr.map((pkg, index) => (
                      
                      <li className="package-item">
                        
                        <img src={require(`../../assets/icons/${pkg.type}.svg`)}/>
                        <p>{pkg.title}</p>
                      </li>
                    ))
                  }
                </ul>
              </section>
              <section className="details-amenity">
                <h3>Amenities</h3>
                <div className="amenity-list">
                  {
                    amenityArr.map((amenity, index) => (
                      <div className="amenity-item">
                        <img src={require(`../../assets/icons/${amenity}.png`)}/>
                        <p>{amenity}</p>
                      </div>
                    ))
                  }
                </div>
                
              </section>
            </div>
            
            
            
          </div>
          <div className="page-options">
            <div className="option-price">
              <h3>From ¥ 10,000</h3>
              <p> {` / hour`}</p>
            </div>
            <div className="option-button">
              <Link to='/details'>
                <a className="next-button">
                  <div className="button-contents">
                    <img src={checkIcon}/>
                    <p>Check Availability</p>
                  </div>
                  
                </a>
              </Link>
                
              <a className="contact-button">Contact host</a>
            </div>
            <div className="option-inputs">
              <div className="option-date">
                <DatePicker/>
              </div>
             
              <div className="option-times">
                <div className="option-checkin" >
                  <Dropdown data={timeArr}/>
                </div>
                <div className="option-checkout">
                  <Dropdown className="option-checkout" data={timeArr}/>
                </div>
              </div>
              <div className="option-guest">
                <Dropdown data={guestArr}/>
              </div>
              
              
            </div>
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default Page;
