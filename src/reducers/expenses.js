
const defaultExpense=[]
const expenseReducer = (state=defaultExpense,action)=>{ 
    switch (action.type){
        case 'ADD':
            return state.concat(action.expense)
                
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>expense.id!==action.id)        
        case 'EDIT_EXPENSE':
            return  state.map((exp)=>{
                if(action.id===exp.id){
                    return {
                        ...exp,
                        ...action.expense
                    }
                }
                else{
                    return exp
                }
            })
        case 'LOAD_EXPENSE':
            return state.concat(action.expense)
        default :
            return state
    }
     
    
}
export default expenseReducer