import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Test() {
  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick = {() => setUser('Andrew')}>Set User</button>
    </div>
  )
}

export default Test;