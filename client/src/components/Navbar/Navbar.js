import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

function Navbar() {
  const {user, setUser} = useContext(UserContext);
  
  const logoutUser = () => {
    setUser(null);
  }

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/items">Find a court</Link></li>
        <li><Link to="/host">Host a court</Link></li>
        {!user && <li><Link to="/login">Log in</Link></li>}
        {!user && <li><Link to="/register">Sign up</Link></li>}
        {user && <li><Link to="/home" onClick={logoutUser}>Log Out</Link></li>}
      </ul>
    </div>
  )
}

export default Navbar;
