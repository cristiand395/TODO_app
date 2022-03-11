import React from 'react';

import './TodoSearch.styles.css'

function TodoSearch({ searchValue, setSearchValue, placeholder }) {

  const onChangeSearchValuei = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return (
    <React.Fragment>
      <input 
      className='TodoSearch'
      value = {searchValue}
      placeholder={placeholder} 
      onChange={onChangeSearchValuei}/>
      <p>{searchValue}</p>
    </React.Fragment>
  )
}

export { TodoSearch }