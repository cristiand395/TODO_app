import React from 'react';

import { TodoCounter } from './components/TodoCounter/TodoCounter.component'
import { TodoSearch } from './components/TodoSearch/TodoSearch.component';
import { TodoList } from './components/TodoList/TodoList.component'
import { TodoItem } from './components/TodoItem/TodoItem.component'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton.component'
import './App.css';

const todos = [
  {id: 1 , text: 'Complete Homework', completed: true},
  {id: 2 , text: 'Trow out the garbage', completed: false},
  {id: 3 , text: 'Clean the house', completed: false},
  {id: 4 , text: 'Talk with my grandparents', completed: false},
  {id: 5 , text: 'Paint the wall', completed: false},
]

function App() {
  const [todo, SetTodo] = React.useState(todos)
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
            key={todo.id}
            text={todo.text}
            state={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
