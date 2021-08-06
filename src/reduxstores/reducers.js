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
            return state
        }
        default : return state
    }
}

// Thunk
// export var AuthReducer = function(state ={
//     isUserLoggedIn : localStorage.token?true:false,
//     isloading:false
// },action){
// // state means here state of store i.e that object whihc contains data
// // action means what it has to do 
//    console.log("ooooooooooooooooo" , action)
//    switch(action.type){
//        case "LOGIN_FETCH":{
//            state= {...state}
//            state["isloading"] = true
//            return state
//        }
//        case "LOGIN_SUCESS" :{
//            state = {...state}
//            state["isUserLoggedIn"] = true
//            state["user"] = action.payload
//            localStorage.setItem('token',action.payload.token)
//            state["isloading"] = false
//            console.log(">>>>>>>>>>>>>>>>>>>>" , state)
//            return state
//        }
//        case "LOGIN_FAILURE":{
//         state= {...state}
//         state["isloading"] = false
//         state["error"]="INVALID LOGIN"
//         return state
//     }
//        default : return state
//    }
// }


export var CakeListReducer = function(state ={
    cakes:localStorage.cakes ? JSON.parse(localStorage.cakes) : []
}, action) {
    switch(action.type){
        case "CAKELIST" : {
            state={...state}
            state["cakes"] = JSON.parse(JSON.stringify(action.payload));
            return state
        }
        default : return state
    }
}

export var CakeCart = function(state ={
    //cartitems : localStorage.cakes ? JSON.parse(localStorage.cakes) : []
},action){
// state means here state of store i.e that object whihc contains data
// action means what it has to do 
   switch(action.type){
        case "CART_FETCHING" :{
            state = {...state}
            state["isloading"] = true
            return state
        }
       case "CART_SUCCESS" :{
            state = {...state}
            state["isloading"] = false
            state["cartitems"] = action.payload
            return state
        }
        case "CART_FAILURE" :{
            state = {...state}
            state["isloading"] = false
            state["carterror"] = "Some Error Occurred"
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