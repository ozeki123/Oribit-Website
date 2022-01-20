import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import useLocalStorage from '../../hooks/useLocalStorage';

function Navbar() {
  const {isLogged, setIsLogged} = useContext(authContext)
  // const {loggedIn, setLoggedIn} = useContext(authContext);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');

  // const itemId = sessionStorage.getItem('id');
  // let item = '';

  // const getUser = () => {
  //   axios.get(`/users/${itemId}`)
  //     .then((res) => {
  //       const selectedUser = res.data;
  //       setUser(selectedUser);
  //       console.log(selectedUser);
  //     })
  //     .catch(err => console.log(err))
  // }   

  // useEffect(() => {
  //   item = sessionStorage.getItem('token');
  //   if(item) {
  //     setLogin(true);
  //   }
    
  // }, [])

  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  })

  const logoutUser = () => {
    setIsLogged(false);
  }

  return (
    isLogged
      ?<div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/items">Find a court</Link></li>
          <li><Link to="/host">Host a court</Link></li>
          <li><Link to="/profile">{user}</Link></li>
          <li><Link to="/home" onClick={logoutUser}>Log Out</Link></li>
        </ul>
      </div>
      :<div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/items">Find a court</Link></li>
            <li><Link to="/host">Host a court</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/register">Sign up</Link></li>
          </ul>
      </div>
  )
}

export default Navbar;
