//Reducers - Redcuers are nothing but just pure function who are responible for updateing the stores

// export var Redcuers1 = function (state={
//     dell:10
// }, action){
// //State means here state of stores i.e that object which data
// //Action means what it has to do    

//     switch(action.type){
//         case "SHUBHAM" :{
//             state = {...state}
//             //Do something to state
//             return state
//         }
//         default : return state
//     }
// }

export var AuthReducer = function(state ={
    isUserLoggedIn : localStorage.token?true:false
}, action) {
    switch(action.type){
        case "LOGIN" : {
            state={...state}
            state["isUserLoggedIn"] = true
            state["user"] = action.payload
            console.log("User", state);
            return state
        }
        default : return state
    }
}

export var CakeList = function(state ={
    isUserLoggedIn : localStorage.token?true:false
}, action) {
    switch(action.type){
        case "CAKELIST" : {
            state={...state}
            state["isUserLoggedIn"] = true
            state["user"] = action.payload
            console.log("User", state);
            return state
        }
        default : return state
    }
}

export var Shubham = function(state ={
    dell : 10
}, action) {
    switch(action.type){
        case "SOMEACTION" : {
            state={...state}
            return state
        }
        case "DELL_LAPTOP" : {
            state={...state}
            state["dell"]-=1
            return state
        }
        default : return state
    }
}

export var Gupta = function(state = {
    attendees : 0
}, action) {
    switch(action.type){
        case "REGISTER" : {
            state={...state}
            state["attendees"]+=1
            return state
        }
        case "DEREGISTER" : {
            state={...state}
            state["attendees"]-=1
            return state
        }
        default : return state
    }
}