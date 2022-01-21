// import axios from 'axios';
// import React, { useState, useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom';

// function Login(){
//   const [data, setData] = useState({
//     email: '',
//     password: ''
//   })
//   const {user, setUser} = useContext(UserContext);

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     if(data.email && data.password){
//       axios.post('/login', {
//         email: data.email,
//         password: data.password
//       })
//       .then((res) => {
//         axios.get(`http://localhost:5000/users/${res.headers.id}`)
//         .then((userRes) => {
//           // console.log(res.data.name);
//           setUser({
//             email: data.email,
//             password: data.password,
//             token: res.headers.token,
//             id: res.headers.id,
//             name: userRes.data.name,
//           });

//           localStorage.setItem('token', res.headers.token);
//         })
//         .catch(err => console.log(err));  
//         // console.log(res);
//         // console.log(res.headers.token);
//         // setUser({
//         //   email: data.email,
//         //   password: data.password,
//         //   token: res.headers.token,
//         //   id: res.headers.id,
//         //   name: res.data.name
//         // });
//         // console.log(res.headers.id);
//         // console.log(user.token)
//         // getUser();
//         // alert('Logged in');
//       })
//       .catch((err) => {
//         console.log(err);
//         alert('Invalid username or password');
//       });
//     } else{
//       alert('Please enter all fields');
//     }
    
//   }

//   const getUser = () => {
    
//   }

//   const handleChange = (event) => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value
//     });
//   }

//   // useEffect(() => {
//   //   localStorage.setItem("token", JSON.stringify(user.token))
//   // }, [user.token])

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign in to Orbit</h1>  
//         <input 
//           type="text"
//           name="email"
//           placeholder="Email address"
//           value={data.email}
//           onChange={handleChange}
//         />
//         <input 
//           type="text"
//           name="password"
//           placeholder="Password"
//           value={data.password}
//           onChange={handleChange}
//         />
//         {
//           !user &&
//             <button type="submit">
//               Sign in
//             </button>
//         }
//         {
//           user && 
//             <Link to="/">
//               <button type="submit">Sign in</button>
//             </Link>
//         }
//       </form>
//     </div>
//   )
// }

// export default Login;