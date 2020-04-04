import React from 'react';
import Homepage from './pages/homepage/Homepage'
import HatsPage from './pages/hats/HatsPage'
import { Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    // bez exact wyrenderuja sie oba w /hats, bo oba pasuja
      <Switch>
        <Route exact path='/' component={Homepage} /> 
        <Route path='/hats' component={HatsPage} />
      </Switch>
  );
}

export default App;
