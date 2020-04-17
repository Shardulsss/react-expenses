import {firebase,database} from '../firebase/firebase'

export const actionAdd=(expense)=>({
    type:'ADD',
    expense
})

export const startActionAdd = (expense={}) =>{
    return (dispatch)=>{
        const {
            note='',
            description='',
            amount=0,
            createdAt=0
        } = expense
        const aExpense = {note,description,amount,createdAt}
        database.ref('expenses').push(aExpense).then((ref)=>{
            dispatch(actionAdd({
                id:ref.id,
                ...aExpense}))
        })
    }
    
}


export const actionRemove=(id)=>({
    type:'REMOVE_EXPENSE',
    id
})

export const startActionRemove=(id)=>{
    return (dispatch)=>{
        return database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(actionRemove(id))
        })
    }
}

export const actionEditExpense=(id,expense)=>({
    type:'EDIT_EXPENSE',
    id,
    expense
})

export const startActionEdit=(id,expense)=>{
    return (dispatch)=>{
        database.ref(`expenses/${id}`).update(expense).then(()=>{
            dispatch(actionEditExpense(id,expense))
        })
    }
}

export const actionLoad =(expenseArray)=>({
    type:'LOAD_EXPENSE',
    expense:expenseArray
})

export const startActionLoad=()=>{
    return (dispatch)=>{
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenseArray = []
            snapshot.forEach((snap)=>{
                expenseArray.push({
                    id:snap.key,
                    ...snap.val()
                })
            })
            console.log(expenseArray)

            dispatch(actionLoad(expenseArray))
        })
    }
}
