import {combineReducers, createStore, applyMiddleware} from "redux"
//import { Redcuers1 } from "./reducers"
//var store = createStore(Redcuers1)

import { Shubham, Gupta, AuthReducer, CakeListReducer,CakeCart } from "./reducers"

import thunk from "redux-thunk"

import createSaga from "redux-saga"
import RootSaga from "./sagas"
var sagaMiddleware = createSaga()

var reducers = combineReducers({Shubham,Gupta, AuthReducer, CakeListReducer, CakeCart})
var store = createStore(reducers, applyMiddleware(sagaMiddleware, thunk))

console.log("Store - ", store);
sagaMiddleware.run(RootSaga)

export default store
console.log("Store --------->", store.getState());

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