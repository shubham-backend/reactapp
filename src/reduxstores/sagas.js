import {all , takeEvery , put} from "redux-saga/effects"
import axios from "axios"
import {afterLogin} from "../index"
function *CartGenerator(){
  // first make and async task  and based on result dispatch necessary action
var success = true
  yield put({
    type:"CART_FETCHING"
  })

  var response  = yield afterLogin({method:"post",
   url: "https://apifromashu.herokuapp.com/api/cakecart",
   requesObj: {}
  })
  console.log("data  from cart items " , response.data.data)
  if(response.data){
      yield put({
          type:"CART_SUCCESS",
          payload:response.data.data
      })
  }else{
    yield put({
        type:"CART_FAILURE"
    })
  }
}

function *CartSaga(){
  yield takeEvery('Cart_Items' , CartGenerator)
}

function *CartManageGenerator({payload}){
  yield put({
    type:"CART_MANAGE_FETCHING"
  })

  var response  = yield afterLogin({method:"post",
   url: "https://apifromashu.herokuapp.com/api/removeonecakefromcart",
   payload
  })
  console.log("Data from cart manage items " , response.data.data)
  if(response.data.data){
      yield put({
          type:"CART_MANAGE_SUCCESS",
          payload:response.data.data
      })
  }else{
    yield put({
        type:"CART_MANAGE_FAILURE"
    })
  }
}

function *CartManageSaga(){
  yield takeEvery('Cart_Inc_Desc_Items' , CartManageGenerator)
}

function *DeleteCartGenerator({ payload }){
  yield put({
      type:"DELETE_CART_FETCHING",
      payload
  })

  var response  = yield afterLogin({method:"post",
   url:"https://apifromashu.herokuapp.com/api/removecakefromcart",
   data:payload
  })
  console.log("Delete from cart items " , response)
  if(response.data.data){
      yield put({
        type:"DELETE_CART_SUCCESS",
        payload:response.data.data
    })
  }else{
    yield put({
        type:"DELETE_CART_FAILURE"
    })
  }
}


function *DeleteCartSaga(){
  yield takeEvery( 'removeItemFromCart' , DeleteCartGenerator)
}


export default function *RootSaga(){
    console.log("root sga ")
 yield all([CartSaga(),CartManageSaga(),DeleteCartSaga()])
}