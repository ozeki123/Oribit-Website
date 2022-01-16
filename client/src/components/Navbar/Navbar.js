import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

function Navbar() {
  const {user, setUser} = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('token');
    if(loggedInUser) {
      setIsLoggedIn(true)
    }
  }, [])
  const logoutUser = () => {
    setUser(null);
    setIsLoggedIn(false);
  }

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/items">Find a court</Link></li>
        <li><Link to="/host">Host a court</Link></li>
        {!isLoggedIn && <li><Link to="/login">Log in</Link></li>}
        {!isLoggedIn && <li><Link to="/register">Sign up</Link></li>}
        {isLoggedIn && <li><Link to="/profile">Profile</Link></li>}
        {isLoggedIn && <li><Link to="/" onClick={logoutUser}>Log Out</Link></li>}
      </ul>
    </div>
  )
}

export default Navbar;
