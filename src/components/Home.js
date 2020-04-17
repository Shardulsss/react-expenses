import ExpenseList from './expenseList';
import ExpenseFilterInput from './expenseFilterInput';
import {Link} from 'react-router-dom'

import React from 'react';
const Home = (props)=>{
    return (
        <div className="con-container">
        <br></br>
        <div className="create-link-button">
            <Link className="link-button" to="/create">Add Item</Link>
        </div>
        <ExpenseFilterInput/>
        <ExpenseList />
        </div>

    )
}

export default Home;