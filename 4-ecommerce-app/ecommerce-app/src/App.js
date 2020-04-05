import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SingIn from './pages/sing-in/SingIn';
import Navbar from './components/navbar/Navbar';
import ProductCategoryPage from './pages/categories/ProductCategoryPage'
import SHOP_DATA from './mockedData/shopdata';

import { Route, Switch } from 'react-router-dom';
import './App.css';

const getLinks = () => {
  return {
    links: [
      { text: 'Home', link: '/' },
      { text: 'Shop', link: '/shop' },
      { text: 'Sign In', link: '/singin' }
    ]
  };
}

const getItemsWithName = (name) => {
  return SHOP_DATA.filter(e => e.title === name).map(e=> e.items);
}

function App() {
  return (
    <div>
      <Navbar {...getLinks()} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/singin' component={SingIn} />

        <Route path='/hats' render={() => <ProductCategoryPage title='HATS PAGE' items={getItemsWithName('Hats')} /> }/>
        <Route path='/jackets' render={() => <ProductCategoryPage title='JACKETS PAGE' items={getItemsWithName('Jackets')}/> }/>
        <Route path='/sneakers' render={() => <ProductCategoryPage title='SNEAKERS PAGE' items={getItemsWithName('Sneakers')}/> }/>
        <Route path='/womens' render={() => <ProductCategoryPage title='WOMENS PAGE' items={getItemsWithName('Womens')}/> }/>
        <Route path='/mens' render={() => <ProductCategoryPage title='MENS PAGE' items={getItemsWithName('Mens')}/> }/>
      </Switch>
    </div>
  );
}

export default App;
