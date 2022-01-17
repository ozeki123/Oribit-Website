import { useState, useEffect } from  'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Items from './components/Items/Items';
import Item from './components/Items/Item/Item';
import Page from './components/Page/Page';
import Host from './components/Host/Host';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserContext from './contexts/UserContext';
import Profile from './components/Profile/Profile';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';

function App() { 
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user,setUser}}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/items" element={<Items/>}></Route>
          <Route path="/page" element={<Page/>}></Route>
          <Route path="/items/:id" element={<Page/>}></Route>
          <Route path="/host" element={<Host/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
