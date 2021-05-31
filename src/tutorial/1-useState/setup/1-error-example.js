import React from 'react';
import { Fragment } from 'react';

const ErrorExample = () => {

  const clickHandle=()=>{
    title = "hey Buddy"
    console.log(title);
  }
  let title = "hey Brother";
  return (
   <React.Fragment>
   <h2>{title}</h2>
   <button type="button" className = "btn" onClick = {clickHandle}>Click to Change Text</button>
   </React.Fragment>
  )
};

export default ErrorExample;
