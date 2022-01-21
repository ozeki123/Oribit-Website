import React from 'react';
import { useContext, useEffect, useState } from "react";
import { authContext } from '../../contexts/Contexts';

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
    isLogged
      ?<div>
        <h1>You are logged in</h1>
        <h1>{sessionStorage.getItem('token')}</h1>
      </div>
    //if user is not logged in
      :<div>
        <h1>You are not logged in</h1>
      </div>
  )
}

export default Home;
