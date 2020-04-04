import React from 'react';
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import Navbar from './components/navbar/Navbar'
import { Route, Switch } from 'react-router-dom';
import './App.css';

const getLinks = () => {
  return {
    links: [
      { text: 'Home', link: '/' },
      { text: 'Shop', link: '/shop' }
    ]
  };
}

function App() {
  return (
    <div>
      <Navbar {...getLinks()} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
