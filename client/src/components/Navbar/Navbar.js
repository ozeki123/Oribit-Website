import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { authContext } from '../../contexts/Contexts';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Navbar.scss';

function Navbar() {
  const {isLogged, setIsLogged} = useContext(authContext)
  // const {loggedIn, setLoggedIn} = useContext(authContext);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');

  const location = useLocation();
  

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
    console.log(location.pathname)
  })

  const logoutUser = () => {
    setIsLogged(false);
    sessionStorage.clear();
  }

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar-container">
          {
            isLogged
            ?
            <nav>
              <ul className="nav-links">
                  <li><Link className="link" to="/home">Home</Link></li>
                  {

                  }
                  <div className="nav-left">
                    <li><Link className="link" to="/items">Find a court</Link></li>
                    <li><Link className="link" to="/host">Host a court</Link></li>
                    <li><Link className="link" to="/groups">Groups</Link></li>
                    <li><Link className="link" to="/profile">{user}</Link></li>
                    <li><Link className="link" to="/home" onClick={logoutUser}>Log Out</Link></li>
                  </div>
                  </ul>
            </nav>
            :<nav>
              <ul className="nav-links">
                  <li><Link className="link" to="/home">Home</Link></li>
                  <div className="nav-left">
                    <li><Link className="link" to="/items">Find a court</Link></li>
                    <li><Link className="link" to="/host">Host a court</Link></li>
                    <li><Link className="link" to="/login">Log in</Link></li>
                    <li><Link className="link" to="/register">Sign up</Link></li>
                  </div>
                  
                </ul>
            </nav>
          }
        </div>
        
      </div>
    </React.Fragment>
    
  )
}

export default Navbar;
