import React, { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { authContext } from '../../contexts/AuthContext';

function Signin() {
  const {isLogged, setIsLogged} = useContext(authContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/login',
        JSON.stringify({'user': username, password}),
        {
          headers: {'Content-Type': 'application/json'}
        }
      );
      
      console.log(response);
      const id = response.data.id;
      const roles = response.data.role;
      const token = response.data.token;
      // setAuth({ user, roles, password, token, id})
      setUserName('');
      setPassword('');
      navigate(from, { replace: true });
      setIsLogged(true);
      sessionStorage.setItem('user', username);
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('id', id);
      sessionStorage.setItem('roles', roles);
      sessionStorage.setItem('isLogged', true);
      console.log(response.data[0]);
      // var items = [];
      // for(var i = 0; i < response.data.length; i++) {
      //   items.push(response.data[i]);
      //   console.log(response.data[i]);
      // }
      // sessionStorage.setItem('item', JSON.stringify(items));
      // if(userAuth){
      //   console.log('Stored to session');
      //   console.log(`User auth is: ${userAuth}`);
      // }
      //local storage set token
      //if local storage token exists, then 
    } catch(err) {
        console.log(err);
    }
    
  }

  return (
    <section>
      <p ref={errRef} className={errMsg ? "error" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          required
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button>Sign in</button>
      </form>
      <p>
        Need an account?
        <span>
          <Link to="/signup">Sign up</Link>
        </span>
      </p>
    </section>
  )
}

export default Signin
