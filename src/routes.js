import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import ProductView from './components/ProductView/ProductView';


export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/account/login" component={Login}/>
        <Route path="/collections/all-clothing" component={Product}/>
        <Route path="/products" component={ProductView}/>
        
    </Switch>
)