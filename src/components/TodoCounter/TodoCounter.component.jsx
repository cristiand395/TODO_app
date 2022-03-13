import React from 'react';

import { Context} from '../../Context'

import './TodoCounter.styles.css'

function TodoCounter() {
  const {
    totalTodos,
    completedTodos
  } = React.useContext(Context)
  return (
    <h2 className="TodoCounter">
      {completedTodos} of {totalTodos} TODO´s completed
    </h2>
  )
}

export { TodoCounter }