import React from 'react';
import {connect} from 'react-redux';
import {actionEdit, actionSortByAmount, actionSortByDate} from '../actions/filter';

const ExpenseFilterInput = (props)=>{
    return (
        <div className="filter-inputs">
            <div className="each-input">

            <input placeholder="search expenses" className="text-input" type="text" value={props.filter.text} onChange={(e)=>{
                    props.dispatch(actionEdit(e.target.value))
                    
                }
            }></input>
            </div>
            <div>
            <select className="select-input" value={props.filter.sortBy} onChange={(e)=>{
                if(e.target.value=='amount'){
                    props.dispatch(actionSortByAmount())
                }
                else if(e.target.value=='date'){
                    props.dispatch(actionSortByDate())
                }
                }}>
                <option value='date' >Date</option>
                <option value='amount' >Amount</option>
            </select>
            </div>
        </div>
    )
}

const mapper = (state)=>{
    return {
        filter:state.filter
    }
}
export default connect(mapper)(ExpenseFilterInput)