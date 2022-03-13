import React from 'react';

import { Context } from '../../Context'
import './TodoForm.styles.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal
  } = React.useContext(Context)

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit} >
      <label>Create New TODO</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Write your new TODO here..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancel
        </button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Create
          </button>
      </div>
    </form>
  )
}

export { TodoForm }