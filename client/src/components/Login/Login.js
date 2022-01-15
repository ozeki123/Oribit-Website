import axios from 'axios';
import React, { useState } from 'react'

function Login(){
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(data.email && data.password){
      axios.post('/login', {
        email: data.email,
        password: data.password
      })
      .then((res) => {
        console.log(res);
        alert('Logged in');
      })
      .catch((err) => {
        console.log(err);
        alert('Invalid username or password');
      });
    } else{
      alert('Please enter all fields');
    }
    
  }

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign in to Orbit</h1>  
        <input 
          type="text"
          name="email"
          placeholder="Email address"
          value={data.email}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login;