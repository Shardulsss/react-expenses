import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Create from '../components/Create';
import Edit from '../components/Edit';
import errorPage from '../components/errorPage';
import Header from '../components/Header'
 
const AppRouter = ()=>{
    return <BrowserRouter>
    <Header/>
    <Switch>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/create" component={Create}/>
    <Route exact path="/edit/:id" component={Edit} />
        
    <Route component={errorPage}/>
    </Switch>
        
    </BrowserRouter>
}

export default AppRouter;