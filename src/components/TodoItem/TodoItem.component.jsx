import React from 'react';

import './TodoItem.styles.css'

function TodoItem({ text, completeTodo, deleteTodo }) {
  return (
    <li className="TodoItem">
      <span onClick={completeTodo}>
        ✅
      </span>
      <p className="TodoItem-p">
        {text}
      </p>
      <span
        onClick={deleteTodo}>
        ❌
      </span>
    </li>
  )
}

export { TodoItem }