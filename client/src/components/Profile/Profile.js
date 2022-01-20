import axios from 'axios';
import React from 'react';
import { useEffect, useState, useContext } from "react";
import { authContext } from '../../contexts/AuthContext';

function Profile() {
  const {isLogged, setIsLogged} = useContext(authContext);
  // const [data, setData] = useState({
  //   name: '',
  // })
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const item = sessionStorage.getItem('token');
    if(item) {
      setLogin(true);
    }
  }, [])
  

  // const getUser = () => {
  //   axios.get(`http://localhost:5000/users/${user.id}`)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data.name);
  //       // const getName = res.data.name
  //       // setData(getName);
  //       // console.log(data.name);
  //     })
  //     .catch(err => console.log(err));
  // }

  // useEffect(() => {
  //   // getUser()
  //   // console.log(user.id)
  // })

  return (
    isLogged
        ? <div>
            <h1>{sessionStorage.getItem('token')}</h1>
          </div>
        :
          <div>
            <h1>User not found</h1>
          </div>
  )
}

export default Profile;