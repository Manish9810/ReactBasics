import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const[users ,setUsers] = useState([]);

  const getUser = async()=>{
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users);
  }
  useEffect( () =>{
    getUser();
  },[])
  return <>
  <h3>GitHub User</h3>
  <ul className="users">

  {users.map((user)=>{
    const{id,login,avatar_url, html_url}= user;
    return (
      <li key = {id}>
        <img src={avatar_url}/>
        <div>
          <h4>{login}</h4>
          <a href={html_url}>Profile</a>
        </div>
      </li>
    )
  })}
  </ul>
  </>;
};

export default UseEffectFetchData;
