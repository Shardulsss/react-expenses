import ExpenseForm from './expenseForm'
import React from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {startActionAdd} from '../actions/expenses';
const Create = (props)=>{
    return (
        <div><div className="con-container"><h1>create</h1></div>
        <ExpenseForm
        onSubmit={(expense)=>{
            props.dispatch(startActionAdd(expense))
            props.history.push('/')
            //console.log(expense)
        }}
        />
        </div>
    )
}
export default connect()(Create);
// {
//     //id:uuid(),
//     note:expense.note,
//     description:expense.description,
//     amount:expense.amount,
//     createdAt:expense.createdAt

// }