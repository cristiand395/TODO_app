import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

import './TodoItem.styles.css'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <AiFillCheckCircle
        onClick={props.onComplete}
        style={{color: '#806afc', fontSize: '35px'}}
        placeholder='Done'
        title="Done"/>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <AiFillCloseCircle 
        onClick={props.onDelete} 
        style={{color: '#f85a5a', fontSize: '35px'}}
        title='Delete'/>
    </li>
  )
}

export { TodoItem }