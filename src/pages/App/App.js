import React from 'react';import './App.css';

import { Provider } from '../../Context'
import { AppUI } from './AppUI';

const todosList = [
  {text: 'Complete Homework', completed: true},
  {text: 'Trow out the garbage', completed: false},
  {text: 'Clean the house', completed: false},
  {text: 'Talk with my grandparents', completed: false},
  {text: 'Paint the wall', completed: false},
]

function App() {
  return (
    <Provider>
      <AppUI />
    </Provider>
  );
}

export { App };
