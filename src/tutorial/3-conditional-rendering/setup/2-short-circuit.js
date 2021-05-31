import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const[text , setText] = useState('');
  const[iserror ,setIsError] = useState(false);
  return (
    <>
    {/* OR ******* AND Operators */}
    <h3>{text || 'Manish  Tiwari'}</h3>
    <button className="btn" onClick={()=>setIsError(!iserror)}>ToGGle Error</button>
    <h2>{iserror && 'Error....'}</h2>

    {/* Ternary Operator */}
    {iserror?(
      <div><h3>
        There is an error</h3>
        </div>
    ): (
      <div>
        <h2>
          There is No error
        </h2>
      </div>
    )}

    </>
  )

};

export default ShortCircuit;
