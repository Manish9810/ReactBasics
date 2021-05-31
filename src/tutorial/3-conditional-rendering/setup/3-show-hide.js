import React, { useState, useEffect } from 'react';

const ShowHide = () => {

const [size, setSize] = useState(false);
return <>
<h1>Window Length</h1>
<button className="btn" onClick={() => setSize(!size)}>Show/Hide</button>
 { size && <Item /> }
</>
};
const Item = () => {
  const[winsize,setWinsize] = useState(window.innerWidth);
  const resizee=()=>{
    setWinsize(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',resizee);
  },[])
  return <>
    <div style={{ marginTop: "4rem" }}>
      <h1>Window</h1>
      <h2>Size :{winsize} pX</h2>
    </div>
  </>
}

export default ShowHide;
