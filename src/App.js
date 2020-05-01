import React from 'react';

import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHooks from './simpleFormInputHooks';
import Clicker from './Clicker';

import './App.css';
import SWMovies from './SWMovies';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHooks />
      <SimpleFormInputHooks />
      <Clicker />
      <SWMovies />
    </div>
  );
}

export default App;
