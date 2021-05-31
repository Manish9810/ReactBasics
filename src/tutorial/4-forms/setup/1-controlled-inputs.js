import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const Delete=(id)=>{
    setPeople(people.filter((user)=>user.id!==id))

  }

  const[name,setName] = useState('');
  const[email ,setEmail] = useState('');
  const[people,setPeople] = useState([]);



  const formsubmit=(e)=>{
    e.preventDefault();
    if(name&&email){
      // console.log("form submit");
      const person={id:new Date().getTime().toString(),name,email};
      console.log(person);
      // setPeople((people)=>{
      //   return [...people,person];
      // });
      setPeople([...people,person]);
      setName('');
      setEmail('');

    }
    else{
      console.log("empty form")
    }
    // console.log(nLinkme,email);
  }

  // useEffect(() => {
  //   localStorage.setPeople("people", JSON.stringify(people));
  // }, [people])
  return <>

  <article style={{margin:'10rem'}}>
    <form className="form">
      <div className="form-control">
        <label htmlFor="name" >Name :</label>
        <input type="text" name="name" id="name"  value={name} onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="email" >E-mail :</label>
        <input type="email" name="email" id="email"  value={email} onChange={(e)=> setEmail(e.target.value)} />
      </div>
      <button type="submit" onClick={formsubmit}>Submit </button>
    </form>

    {people.map((user)=>{
      const{id,name,email} = user;
      return <div className="item" key={id}>
        <h4>{name}</h4>
        <p>{email}</p>
        <div >
        <button className="btn" onClick={()=>Delete(id)}> Delete</button>
        </div>
      </div>
    })}

    <button className="btn" style={{backgroundColor:"red"}} onClick={()=>setPeople([])}>All Delete</button>
  </article>
  </>
  
};

export default ControlledInputs;
