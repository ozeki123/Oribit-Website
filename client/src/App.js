import { useState, useEffect, useMemo } from  'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Items from './components/Items/Items';
import Item from './components/Items/Item/Item';
import Page from './components/Page/Page';
import Host from './components/Host/Host';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Layout from './components/Layout/Layout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Test from './components/Test';
import UserContext from './contexts/UserContext';
import { authContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() { 
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false);
  // const [user, setUser] = useState(null);
  // const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [loggedIn, setLoggedIn] = useState(false);
  const loggedValue = useMemo(() => ({loggedIn, setLoggedIn}), [loggedIn, setLoggedIn])
  return (
    <authContext.Provider value={{isLogged, setIsLogged}}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            {/*public routes*/}
            <Route path="/login" element={<Signin/>}></Route>
            <Route path="/register" element={<Signup/>}></Route>
            <Route path="/host" element={<Host/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/items" element={<Items/>}></Route>
            <Route path="/items/:id" element={<Page/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/test" element={<Test/>}></Route>
            {/*protected routes
            <Route element={<RequireAuth allowedRoles={['user']}/>}>
              <Route path="/profile" element={<Profile/>}></Route>
            </Route>*/}
          </Route>
        </Routes>
      </div>
    </authContext.Provider>
  );
}

export default App;
