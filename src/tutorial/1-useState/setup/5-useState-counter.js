import React, { useState } from 'react';


 
const UseStateCounter = () => {

  const[count,setCount]= useState(0);

  const clicked =()=>{
    setCount(0);
  }

  const clicked1=()=>{
    setTimeout(()=>{
      setCount(count+1);
    },1000)
  }
  return <>
  <section> <h2>COUNTER</h2>
  <h1>{count}</h1>
  <button className="btn" onClick={()=>setCount(count+1)}>Increase</button>
  <button className="btn" onClick={()=>setCount(count-1)}>Decrease</button>
  <button className="btn" onClick={clicked}>Reset</button>
  </section>

  <section style={{margin:'4rem'}}> 
    <h2>Complex Counter</h2>
    <h1>{count}</h1>
    <button className="btn" onClick={clicked1}>Clicked To Add Aditional</button>
  </section>
  </>
};

export default UseStateCounter;
