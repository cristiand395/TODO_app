import React from 'react';

import './TodoItem.styles.css'

function TodoItem(props) {
  const [state, setState] = React.useState(true)

  const TodoCompleted = () => (
    setState(true)
  )
  const TodoDeleted = () => (
    console.log('deleted')
  )

  return (
    <li className="TodoItem">
      <span onClick={TodoCompleted}>
        ✅
      </span>
      <p className="TodoItem-p">
        {props.text}
      </p>
      <span
        onClick={TodoDeleted}>
        ❌
      </span>
    </li>
  )
}

export { TodoItem }