import React from 'react';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Home() {
  const {user} = useContext(UserContext);
  return (
    <div>
      {!user && <h1>You're not logged in</h1>}
      {user && <h1>You're logged in with {user.name}</h1>}
    </div>
  )
}

export default Home;
