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

function App() { 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/items" element={<Items/>}></Route>
        <Route path="/page" element={<Page/>}></Route>
        <Route path="/items/:id" element={<Page/>}></Route>
        <Route path="/host" element={<Host/>}></Route>
      </Routes>
    </div>
    
    //1.) create route path='/items/:id'
    //2.) <Link to={`/items/${item.id}`}></Link>
  );
}

export default App;
