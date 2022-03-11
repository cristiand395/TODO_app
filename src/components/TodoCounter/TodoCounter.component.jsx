import React from 'react';

import './TodoCounter.styles.css'

function TodoCounter({ completed, total }) {
  return (
    <h2 className="TodoCounter">
      {completed} of {total} TODO`s completed
    </h2>
  )
}

export { TodoCounter }