import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import {Provider} from 'react-redux'
import AppRouter from './Routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configStore from './store/configStore';
import {actionAdd, startActionLoad} from './actions/expenses';
import applyFilter from './selector/applyFilter';
import './firebase/firebase'


const store = configStore()
//const state = store.getState()
// store.dispatch(actionAdd({
//     id:uuid(),
//     note:"rent3",
//     description:"sec rentexp",
//     amount:100,
//     createdAt:1

// }))

// store.dispatch(actionAdd({
//     id:uuid(),
//     note:"bill",
//     description:"first rent exp",
//     amount:1000,
//     createdAt:4

// }))
// store.dispatch(actionAdd({
//     id:uuid(),
//     note:"light",
//     description:"sec rent exp",
//     amount:105,
//     createdAt:3

// }))

// console.log(applyFilter(store.getState().expenses,store.getState().filter))



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(<p>loading...</p>,temp)
store.dispatch(startActionLoad()).then(()=>{
    ReactDOM.render(jsx,temp)
})

