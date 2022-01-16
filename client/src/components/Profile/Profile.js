import axios from 'axios';
import React from 'react';
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Profile() {
  // const [data, setData] = useState({
  //   name: '',
  // })
  const {user} = useContext(UserContext);

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
    <div>
      {!user && <h1>User not found</h1>}
      {user && <h1>Hello {user.name} Your token is {user.token}</h1>}
    </div>
  )
}

export default Profile;