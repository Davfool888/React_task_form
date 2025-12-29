import React from 'react';
import './TodoItem.css';

function TodoItem({parrafo}) {
  return (

    <li >
      <p
      >{parrafo}</p>
    </li>
  );

}

export { TodoItem };