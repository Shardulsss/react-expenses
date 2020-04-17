export const actionEdit=(filter)=>({
    type:'EDIT',
    text:filter
    // sortBy:filter.sortBy
})

export const actionSortByDate=()=>({
    type:'SORT_BY_DATE'
})
export const actionSortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
})