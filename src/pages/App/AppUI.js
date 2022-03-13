import React from 'react';

import { Context } from '../../Context'

import { TodoCounter } from '../../components/TodoCounter/TodoCounter.component'
import { TodoSearch } from '../../components/TodoSearch/TodoSearch.component';
import { TodoList } from '../../components/TodoList/TodoList.component'
import { TodoItem } from '../../components/TodoItem/TodoItem.component'
import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton.component'
import { DoneTodos } from '../../components/DoneTodos/DoneTodos.component'
import { Modal } from '../../components/Modal'
import { TodoForm } from '../../components/TodoForm/TodoForm.component'

import './App.css';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    completedTodos
  } = React.useContext(Context)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {!!completedTodos ?
        <DoneTodos/> : null}

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>)}
    </React.Fragment>
  );
}

export { AppUI };
