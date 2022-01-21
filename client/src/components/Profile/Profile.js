import axios from 'axios';
import React from 'react';
import { useEffect, useState, useContext } from "react";
import { authContext } from '../../contexts/Contexts';
import { useAxios } from '../../hooks/useAxios';

function Profile() {
  const {isLogged, setIsLogged} = useContext(authContext);
  const url = sessionStorage.getItem('id');
  const {response, loading} = useAxios(`/users/${url}`);

  useEffect(() => {
    console.log(response);
    console.log(sessionStorage.getItem('id'));
  }, [])

  return (
    isLogged
        ? <div>
            <h1>{sessionStorage.getItem('token')}</h1>
          </div>
        :
          <div>
            <h1>User not found</h1>
          </div>
  )
}

export default Profile;