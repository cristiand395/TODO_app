import React from 'react';

import { Context } from '../../Context' 
import './DoneTodo.styles.css';

function DoneTodos() {
  const {
    doneTodos
  } = React.useContext(Context)
  return (
    <ul>
      {doneTodos.map(doneTodo => (
        <li>{doneTodo.text}</li>
      ))
      }
    </ul>
  )
}
export { DoneTodos }