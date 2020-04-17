const applyFilter=(expenses,filt)=>{
    return expenses.filter((expense)=>{
        //const startAtmatch = typeof expense.createdAt !== 'number' || expense.createdAt>=filt.startAt;
        //const endAtmatch = typeof expense.createdAt !== 'number' || expense.createdAt<=filt.endAt;
        const textMatch = expense.description.toLowerCase().includes(filt.text.toLowerCase())
        return textMatch //&& startAtmatch && endAtmatch
    }).sort((a,b)=>{
        if (filt.sortBy=='amount'){
            return a.amount<b.amount?1:-1
        }
        else if(filt.sortBy=='date'){
            return a.date<b.date?1:-1
        }
    })
}
export default applyFilter