import React, { Fragment } from 'react';
import { useContext, useEffect, useState } from "react";
import { authContext } from '../../contexts/Contexts';
import './Home.scss';

function Home() {
  const [login, setLogin] = useState(false);
  const {isLogged, setIsLogged} = useContext(authContext);

  const itemId = sessionStorage.getItem('id');

  useEffect(() => {
    const item = sessionStorage.getItem('token');
    console.log(`Your tokenn number is: ${item}`);
    if(item) {
      setLogin(true);
    }
    // if(auth.isLoggedIn){
    //   console.log('Logged in')
    // } else {
    //   console.log('Logged out')
    // }
  }, [])

  return (
    //if user is logged in
    <Fragment>
      <main className="home-container">
        <section className="home-section">
          <article className="home-contents">
            <div className="home-header">
              <h1>orbit</h1>
              <p>スポーツの楽しみをいつでも、どこでも。</p>
            </div>
            
            <input placeholder="Enter location here"/>
            {
              // isLogged
              //   ?<div>
              //     <p>You are logged in</p>
              //     <p>{sessionStorage.getItem('token')}</p>
              //   </div>
              //   :<div>
              //     <p>You are not logged in</p>
              //   </div>
            }
          </article> 
        </section>
      </main>
      <section>
      </section>
    </Fragment>
    
 
  )
}

export default Home;
