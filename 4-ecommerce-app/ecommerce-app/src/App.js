import React from 'react';
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import { Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
      <Switch>
        <Route exact path='/' component={Homepage} /> 
        <Route path='/shop' component={ShopPage} />
      </Switch>
  );
}

export default App;
