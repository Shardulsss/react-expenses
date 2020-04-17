import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:props.expense?props.expense.description:'',
            amount:props.expense?props.expense.amount.toString():'',
            note:props.expense?props.expense.note:'',
            createdAt:moment(),
            calFocused:false,
            error:''
        };
    }
    
    onDescChange =(e)=>{
        const description = e.target.value;
        this.setState({description})
    }
    onNoteChange =(e)=>{
        const note = e.target.value;
        this.setState({note})
    }
    onAmountChange =(e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState({amount})
        }
        
    }
    onDateChange=(createdAt)=>{
        this.setState({createdAt})
    }
    onFocusChanged=({focused})=>{
        this.setState({calFocused:focused})
    }

    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.amount|| !this.state.description){
            this.setState({error:"please provide valid details"})
        }
        else{
            this.setState({error:''})
            console.log("submitted")
            this.props.onSubmit({
                note:this.state.note,
                amount:parseFloat(this.state.amount),
                description:this.state.description,
                createdAt:moment().valueOf()
            })
        }

    }
    render(){
        return(
            <div className="con-container">
            {this.state.error&&<p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <div className="form-exp">
            <div className="form-each">
            <input type="text" className="text-input" placeholder="Description" value={this.state.description} onChange={this.onDescChange}></input>
            </div>
            <div className="form-each">
            <input className="text-input" type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}></input>
            </div>
            <div className="form-each">
            <textarea className="text-box" type="text" placeholder="Note" value={this.state.note} onChange={this.onNoteChange}></textarea>
            </div>
            <div>
            <button className="link-button" type="submit">ADD</button>
            </div>
            </div>
            </form>
            </div>
        )
    }
    
}