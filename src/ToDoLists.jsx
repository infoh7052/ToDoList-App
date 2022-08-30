import React from 'react';

const ToDoLists = (props) => {

const deleteItems = () => {
  
}
  
  return  (
    <>
      <div className='todo_style'>
        <i className="fa-solid fa-trash-can" onClick={() => {
      
          props.onSelect(props.id);
        }} ></i>
        
    <li> {props.text} </li>
        </div>
    </>
      );
}

export default ToDoLists;