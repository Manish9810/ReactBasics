import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const[size,setSize] = useState(window.innerWidth);

  const resizeee=()=>{
    setSize(window.innerWidth);
    console.log("nikl lwde");
  }
  console.log("Manish aji haan");
  // {window.addEventListener('resize', resizeee);}
  useEffect(()=>{
    window.addEventListener('resize', resizeee);
    console.log("kyaa haal h bhai k");
    return ()=>{
      window.removeEventListener('resize',resizeee)
    }
  },[]);
  return <>
  <h1>Window Size</h1>
  <h2>{size} PX</h2>
  {console.log("inside")}
  </>
};

export default UseEffectCleanup;
