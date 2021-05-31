import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  

  const clicked=(e)=>{
    e.preventDefault();
    console.log(refContainer.current.value);
  }
  
  return(
   <>

  <article>
    <form className="form">
      <div className="form-control">
        <label htmlFor="name">Name  :</label>
        <input type="text" name="name" id="name" ref ={refContainer} />
      </div>
      <button type="submit" onClick={clicked}>Submit</button>
    </form>
  </article>

  </>
  )

};

export default UseRefBasics;
