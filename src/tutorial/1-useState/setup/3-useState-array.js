import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const Clicked =(id)=>{
      // for deleting particular item******//
    setPeople(people.filter((person)=>person.id!==id));
  }

  const[people ,setPeople] = React.useState(data);
  return <>
  {people.map((person)=>{
    const{id,name} = person;
    return <div  key ={id} className="item">
      <h3>{name}</h3>
      <button onClick={()=>Clicked(id)}>Delete Me</button>

    </div>
  })}
  <button className="btn" onClick={()=> setPeople([])} >All Delete</button>
  </>
};

export default UseStateArray;
