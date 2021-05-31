import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
// const url = 'https://api.github.com/users';
const MultipleReturns = () => {

  const [loading , setLoading] = useState(true);
  const[error ,setError] = useState(false);
  const[user ,setUser] = useState('default user');

  const getUser = async()=>{

     const resp = await fetch(url);
     if(resp.status>=200 && resp.status<=299){
     const user = await resp.json();
     const {login} = user;
    setUser(login);
    setLoading(false);
     }
     else{
       setLoading(false);
       setError(true);
      //  throw new Error(resp.statusText);
     }    
  }

  useEffect(()=>{
    getUser();
  })

  if(loading){
    return(
    <div> <h2>loading.....</h2>
    </div>
    )
  }
  if(error){
  return (
  <div><h2>Error.....</h2>;
  </div>
  )
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
};

export default MultipleReturns;
