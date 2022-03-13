import React from 'react';

import { Context } from '../../Context'
import './CreateTodoButton.styles.css'

function CreateTodoButton(props) {
  const {setOpenModal} = React.useContext(Context)
  return (
    <button 
      className="CreateTodoButton"
      onClick={() => setOpenModal(true)}>
      +
    </button>
  )
}

export { CreateTodoButton }