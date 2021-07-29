import {combineReducers, createStore} from "redux"
//import { Redcuers1 } from "./reducers"
//var store = createStore(Redcuers1)

import { Shubham, Gupta, AuthReducer } from "./reducers"
var reducers = combineReducers({Shubham,Gupta, AuthReducer})
var store = createStore(reducers)

export default store
console.log("Store", store.getState());

// store.subscribe(()=>{
//     console.log("I will be called on any event on store", store.getState());
// })

// var storedata = store.getState()

// console.log("State of store is intially ", storedata);

// store.dispatch({
//     type:"SHUBHAM"
// })


// storedata =store.getState()

// console.log("State of store is ", storedata);