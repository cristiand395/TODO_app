import React from 'react';

import { TodoCounter } from './components/TodoCounter/TodoCounter.component'
import { TodoSearch } from './components/TodoSearch/TodoSearch.component';
import { TodoList } from './components/TodoList/TodoList.component'
import { TodoItem } from './components/TodoItem/TodoItem.component'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton.component'
import './App.css';

const todosList = [
  {text: 'Complete Homework', completed: true},
  {text: 'Trow out the garbage', completed: false},
  {text: 'Clean the house', completed: false},
  {text: 'Talk with my grandparents', completed: false},
  {text: 'Paint the wall', completed: false},
]

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_v1')
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_v1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }
  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (searchValue.length >= 1){
    searchedTodos = todos.filter(todo => {
      const searchText = searchValue.toLowerCase()
      const todoText = todo.text.toLowerCase()
      return todoText.includes(searchText)
    })
  } else {
    searchedTodos = todos
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_v1', stringifiedTodos)
    setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const todoIndex = todosList.findIndex(todo => todo.text === text)
    const newTodos = [...todosList]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todosList.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}/>
      <TodoSearch 
        placeholder='Search'
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completeTodo={() => completeTodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
