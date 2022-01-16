import React from 'react';
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";

function Home() {
  const {user} = useContext(UserContext);

  return (
    <div>
      {!user && <h1>You're not logged in</h1>}
      {user && <h1>Hello {user.name} You're logged in with {user.token}</h1>}
    </div>
  )
}

export default Home;
