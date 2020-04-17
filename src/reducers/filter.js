const defaultFilter={
    text:'',
    sortBy: 'amount',
    startAt:undefined,
    endAt:undefined


}

const filterReducer = (state=defaultFilter,action)=>{ 
    switch (action.type){
        case 'EDIT':
            return {
                ...state,
                text:action.text
                
                
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
                
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
                    
            }
    
        default :
            return state
    }
     
    
}
export default filterReducer