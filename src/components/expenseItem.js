import React from 'react';
import {Link } from 'react-router-dom'

const ExpenseItem =(props)=>{
    return (
        <div>
            <Link className="item-title" to={`/edit/${props.expense.id}`}>
            <h2>{props.expense.description}</h2>
            <h3>Note:{props.expense.note}</h3>
            <h3>amount:{props.expense.amount}</h3>
            </Link>            
            <br></br>
            
        </div>
    )
}

export default ExpenseItem