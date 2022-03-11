import React from 'react';

import './CreateTodoButton.styles.css'

function CreateTodoButton(props) {
  return (
    <button 
      className="CreateTodoButton"
      onClick={()=> console.log('clikeoso')}>
      +
    </button>
  )
}

export { CreateTodoButton }