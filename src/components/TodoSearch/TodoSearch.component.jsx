import React from 'react';

import { Context } from '../../Context'
import './TodoSearch.styles.css'

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
    searchedTodos
  } = React.useContext(Context)

  const onChangeSearchValuei = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return (
    <React.Fragment>
      <input 
        className='TodoSearch'
        value = {searchValue}
        placeholder='Search' 
        onChange={onChangeSearchValuei}/>
      {searchValue.length ? <p>Results: {searchedTodos.length}</p> : null}
    </React.Fragment>
  )
}

export { TodoSearch }