import React from 'react';

import { Context } from '../../Context' 
import './DoneTodo.styles.css';

function DoneTodos() {
  const {
    doneTodosList
  } = React.useContext(Context)
  return (
    <ul>
      {doneTodosList.map(doneTodo => (
        <li>{doneTodo}</li>
      ))
      }
    </ul>
  )
}
export { DoneTodos }