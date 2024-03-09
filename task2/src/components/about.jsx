import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function About() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
    }, []); // Add `getUsers` as a dependency
    console.log(users)

  const formattedData = users.map(user => {
    return (
      <div key={user.id}>
        <h2>{user.id}</h2>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <hr/>
        
      </div>
    );
  });

  return (
    <>
      <h1>This is About page</h1>
      <p> {formattedData}</p>
    </>
  );
}