import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthProvider';
import axios from 'axios';

function Signin() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/login',
        JSON.stringify({username: user, password}),
        {
          headers: {'Content-Type': 'application/json'}
        }
      );
      // console.log(JSON.stringify(response?.data));
      console.log(response);
      // console.log(response.data.token, response.data.id);
      setUser('');
      setPassword('');
      setSuccess(true);
    } catch(err) {
        console.log(err);
    }
    
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <Link to="/">Go to home</Link>
        </section>
      ) : (
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
          onChange={(e) => setUser(e.target.value)}
          value={user}
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
      )}
    </>
  )
}

export default Signin
