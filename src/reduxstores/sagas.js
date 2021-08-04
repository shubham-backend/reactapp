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
   data:{}
  })
  console.log("data  from cart items " , response.data)
  if(response.data){
      yield put({
          type:"CART_SUCCESS",
          payload:response.data
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

export default function *RootSaga(){
    console.log("root sga ")
 yield all([CartSaga()])
}