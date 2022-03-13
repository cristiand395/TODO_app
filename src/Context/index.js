import React from 'react';
import { useLocalStorage } from './Hooks/useLocalStorage';

const Context = React.createContext();

function Provider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  let doneTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    doneTodos.push(text)
    saveTodos(newTodos);
    console.log(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text: text,
      completed: false
    })
    saveTodos(newTodos)
  }

  //Modal
  const [openModal, setOpenModal] = React.useState(false)
  
  return (
    <Context.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
      doneTodos
    }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, Provider };