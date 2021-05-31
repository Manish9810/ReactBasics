import React, { useState } from 'react';

const UseStateBasics = () => {

  const[title,setTitle] = useState('heyBaby');

  const clickHandle=  ()=>{
    if(title=='heyBaby'){
    setTitle('heyJannu');
    }
    else{
      setTitle('heyBaby');
    }
  }
  
  return (
      <React.Fragment>
        <h2>{title}</h2>
        <button type="button" className="btn" onClick={clickHandle}>Click to Change the Text</button>
      </React.Fragment>
  )
};

export default UseStateBasics;
