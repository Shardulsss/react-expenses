import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// const defaultState = {
//     expenses:[{
//         id:'dsfsd',
//         note:"rent",
//         description:"house rent",
//         amount:0,
//         createdAt:0

//     }],
//     filter: {
//         text:'',
//         sortBy: 'amount',
//         startAt:undefined,
//         endAt:undefined
//     }
// }

// const defaultExpense=[]

// const defaultFilter={
//     text:'rent',
//     sortBy: 'amount',
//     startAt:undefined,
//     endAt:undefined


// }

// const actionAdd=(expense)=>({
//     type:'ADD',
//     expense
// })

// const actionEdit=(filter)=>({
//     type:'EDIT',
//     text:filter.text,
//     sortBy:filter.sortBy
// })
// const actionRemove=(id)=>({
//     type:'REMOVE_EXPENSE',
//     id
// })
// const actionEditExpense=(id,expense)=>({
//     type:'EDIT_EXPENSE',
//     id,
//     expense
// })
// const actionSortByDate=()=>({
//     type:'SORT_BY_DATE'
// })
// const actionSortByAmount=()=>({
//     type:'SORT_BY_AMOUNT'
// })

// const expenseReducer = (state=defaultExpense,action)=>{ 
//     switch (action.type){
//         case 'ADD':
//             return state.concat(action.expense)
                
//         case 'REMOVE_EXPENSE':
//             return state.filter((expense)=>expense.id!==action.id)        
//         case 'EDIT_EXPENSE':
//             return  state.map((exp)=>{
//                 if(action.id===exp.id){
//                     return {
//                         ...exp,
//                         ...action.expense
//                     }
//                 }
//                 else{
//                     return exp
//                 }
//             })
//         default :
//             return state
//     }
     
    
// }
// const filterReducer = (state=defaultFilter,action)=>{ 
//     switch (action.type){
//         case 'EDIT':
//             return {
//                 ...state,
//                 text:action.text,
//                 sortBy:action.sortBy
                
//             }
//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy:'date'
                
//             }
//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy:'amount'
                    
//             }
    
//         default :
//             return state
//     }
     
    
// }

// const applyFilter=(expenses,filt)=>{
//     return expenses.filter((expense)=>{
//         //const startAtmatch = typeof expense.createdAt !== 'number' || expense.createdAt>=filt.startAt;
//         //const endAtmatch = typeof expense.createdAt !== 'number' || expense.createdAt<=filt.endAt;
//         const textMatch = expense.description.toLowerCase().includes(filt.text.toLowerCase())
//         return textMatch //&& startAtmatch && endAtmatch
//     }).sort((a,b)=>{
//         if (filt.sortBy=='amount'){
//             return a.amount<b.amount?1:-1
//         }
//         else if(filt.sortBy=='date'){
//             return a.date<b.date?1:-1
//         }
//     })
// }

const store = createStore(combineReducers({
    expenses:expenseReducer,
    filter:filterReducer
   
}))
store.subscribe(()=>{
    console.log("changed")
    

    console.log(store.getState())
    
})


store.dispatch(actionAdd({
    id:uuid(),
    note:"rent2",
    description:"first exp",
    amount:50,
    createdAt:0

}))

store.dispatch(actionEdit({
    text:"",
    sortBy:"amount"
}))

store.dispatch(actionAdd({
    id:uuid(),
    note:"rent3",
    description:"second exp",
    amount:300,
    createdAt:0

}))
const visible = applyFilter(store.getState().expenses,store.getState().filter)
console.log(visible)
// store.dispatch(actionRemove('dsacw'))

// store.dispatch(actionEditExpense('dsacsa', {
//     note:"abc",
//     amount:500
   
// }))

store.dispatch(actionSortByAmount())
store.dispatch(actionSortByDate())