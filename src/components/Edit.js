import {actionEditExpense, actionRemove, startActionRemove, startActionEdit} from '../actions/expenses'
import ExpenseForm from './expenseForm'
import React from 'react';
import {connect} from 'react-redux'




const Edit = (props)=>{
    //console.log(props)
    return (
        <div>
        <div className="con-container">
        <h1>Editing your expense</h1>
        </div>
        <ExpenseForm 
        expense={props.expenses}
        onSubmit={(newexpense)=>{
            props.dispatch(startActionEdit(props.match.params.id,{
                
                note:newexpense.note,
                description:newexpense.description,
                amount:newexpense.amount,
                createdAt:newexpense.createdAt
            
            }))
            props.history.push('/')
            
        }}
        />
        <div className="con-container">
        <button className="link-button" onClick={()=>{
            props.dispatch(startActionRemove(props.expenses.id)) 
            props.history.push('/')
         }}>Remove</button>
         </div>
        </div>
    )
}

const mapper=(state,props)=>{
    return {expenses:state.expenses.find((exp)=>exp.id===props.match.params.id)}
    
}
export default connect(mapper)(Edit);