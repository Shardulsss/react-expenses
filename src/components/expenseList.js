import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './expenseItem';
import applyFilter from '../selector/applyFilter'

const ExpenseList = (props)=>{
    return (
        <div>
            <h1>DashBoard</h1>
            {props.expenses.map((expense)=>{
                return <ExpenseItem key={expense.id} expense={expense} />                
            })}
        </div>
    )
}

const mapper = (state)=>{
    return{
        expenses:applyFilter(state.expenses,state.filter)
        //expenses:state.expenses
    }
}

export default connect(mapper)(ExpenseList);
