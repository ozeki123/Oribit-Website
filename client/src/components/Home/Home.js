import React, { Fragment } from 'react';
import { useContext, useEffect, useState } from "react";
import { authContext } from '../../contexts/Contexts';
import './Home.scss';
import Carousel from '../Carousel/Carousel';

function Home() {
  const [login, setLogin] = useState(false);
  const {isLogged, setIsLogged} = useContext(authContext);

  const itemId = sessionStorage.getItem('id');

  const recommendedData = {
    "items":[
      {"location": "Tokyo, Japan", "image": "Tokyo"},
      {"location": "Karuizawa, Japan", "image": "Karuizawa"},
      {"location": "Okinawa, Japan", "image": "Okinawa"},
      {"location": "Osaka, Japan", "image": "Osaka"},
      {"location": "Kangawa, Japan", "image": "Kanagawa"},
      {"location": "Saitama, Japan", "image": "Saitama"},
      {"location": "Nagano, Japan", "image": "Nagano"},
    ]
  }
  const popularData = {
    "items":[
      {"location": "Karuizawa, Japan", "image": "Karuizawa"},
      {"location": "Tokyo, Japan", "image": "Tokyo"},
      {"location": "Okinawa, Japan", "image": "Okinawa"},
      {"location": "Osaka, Japan", "image": "Osaka"},
      {"location": "Osaka, Japan", "image": "browse"},
    ]
  }

  useEffect(() => {
    const item = sessionStorage.getItem('token');
    console.log(`Your tokenn number is: ${item}`);
    if(item) {
      setLogin(true);
    }
  }, [])

  return (
    //if user is logged in
    <Fragment>
      <main className="home-container">
        <section className="home-carousel">
          <Carousel/>
        </section>
        <section className="about-banner">
          <div className="banner-contents">
            <article>
              <h2>運動したいときには、swishを。</h2>
              <div className="banner-subtitle">
                <h3>スポーツをいつまでもできるための</h3>
                <h3>スポーツコート予約アプリ</h3>
              </div>
            </article>
            <article className="banner-input">
              <input className="border" placeholder="住所を入力"></input>
            </article>
          </div>

        </section>
      </main>
    </Fragment>
    
 
  )
}

export default Home;
