import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SingInAndSingUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/singin" component={SingInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;
