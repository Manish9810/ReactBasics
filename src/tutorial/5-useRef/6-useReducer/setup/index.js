import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../../data';
// reducer function

const reducer = (state,action)=>{
  console.log(action,state);
  if(action.type==='Item_Added'){
    const Added = [...state.people,action.payload];
    return {
    ...state,
    people:Added,
    isModalOpen:true,
    modalContent:'item added'
    }
  }
  if(action.type==='No_Value'){
    return{
      ...state,
      isModalOpen:true,
      modalContent:'No value entered'
    }
  }
  throw new Error('abcd');

}
const redduu = {
  people:[],
  isModalOpen : false,
  modalContent:''
}

const Index = () => {
  const[name ,setName] = useState('');
  const[state , dispatch] = useReducer(reducer,redduu)

  // const[people,setPeople] = useState(data);
  // const[modal ,setModal] = useState(false);

  const clicked = (e)=>{
    e.preventDefault();
    if(name){
      const addperson = {id: new Date().getTime().toString(),name}
      dispatch({type:'Item_Added' , payload:addperson});
    }
    else{
      dispatch({type:'No_Value'});
    }
  };
  return <>

  {state.isModalOpen,<Modal modalContent={state.modalContent} />}
  <article>
    <form className="form">
      <div>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <button type="submit
      " onClick={clicked}>Add</button>
    </form>
  </article>

  {state.people.map((user,id)=>{
    return <div key={id}>
        <h3>{user.name}</h3>
      </div>
    
  })}
  </>


};

export default Index;
