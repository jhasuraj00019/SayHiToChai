import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './page1/page1';
import Menu from './page2/page2';
import Order from './page3/page3';
import Navbar from './navbar'


function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route exact path='/' component= {Home}/>
            <Route path="/menu" component = {Menu} />
            <Route path="/ordering" component = {Order} />
        </BrowserRouter>
    )
}

export default Router;
