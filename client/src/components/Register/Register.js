import axios from 'axios';
import React, { useState } from 'react';

function Register() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:5000/register';

    if(user.name && user.email && user.password){
      axios.post('/register', {
        name: user.name,
        email: user.email,
        password: user.password
      })
      .then((res) => {
        console.log(res);
        alert(`Welcome ${user.name}`);
      })
      .catch((err) => {
        alert('Email already exists');
        console.log(err);
      })
    } else{
      alert('Please enter all fields');
    }

    
  }

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]:event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter full name" 
          value={user.name} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="email" 
          placeholder="Enter email address"
          value={user.email} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="password"
          placeholder="Enter password" 
          value={user.password} 
          onChange={handleChange} 
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default Register;
