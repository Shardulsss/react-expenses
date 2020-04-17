import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = (props)=>{
    return (
        <header className="header">
        <div className="con-container">
            <Link to="/" className="header_title">
            <h1>Expensision App</h1></Link>
            
        </div>    
        </header>
    )
}

export default Header;