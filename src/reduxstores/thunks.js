import axios from "axios"
import { requestFunction } from "../index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export  function Loginthunk(data){
    return async (dispatch)=>{
        dispatch({
            type:"LOGIN_FETCH"
        })
        var result  = await  axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/login",
            data:data
        })
        if(result.data.token){
            dispatch({
                type:"LOGIN_SUCESS",
                payload:result.data
            })
        }
        else{
            dispatch({
                type:"LOGIN_FAILURE"
            })
        }
       
    }
}

export function AddToCartthunk(data) {
    return async (dispatch) => {
      dispatch({
        type: "ADD_CART_FETCHING",
      });
      var result = await requestFunction({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/addcaketocart",
        data: data,
        headers: {
            authtoken: localStorage.token,
        },
      });
      if (result) {
        dispatch({
          type: "ADD_CART_SUCCESS",
          payload: result.data,
        });
        dispatch(FetchCartthunk());
      } else {
        dispatch({
          type: "ADD_CART_FAILURE",
        });
        alert("error while adding to cart")
      }
    };
}

export function Removeonefromcartthunk(data) {
    return async (dispatch) => {
        dispatch({
        type: "REMOVE_CART_FETCHING",
        });
        var result = await requestFunction({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/removeonecakefromcart",
        data: data,
        headers: {
            authtoken: localStorage.token,
        },
        });
        if (result) {
        dispatch({
            type: "REMOVE_CART_SUCCESS",
            payload: result.data,
        });
        dispatch(FetchCartthunk());
        } else {
        dispatch({
            type: "REMOVE_CART_FAILURE",
        });
        }
    };
}

export function Removefromcartthunk(data) {
    return async (dispatch) => {
        dispatch({
        type: "CART_FETCHING",
        });
        var result = await requestFunction({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/removecakefromcart",
        data: data,
        headers: {
            authtoken: localStorage.token,
        },
        });
        if (result) {
        dispatch({
            type: "REMOVE_FROM_CART_SUCCESS",
            payload: result.data,
        });
        dispatch(FetchCartthunk());
        } else {
        dispatch({
            type: "REMOVE_FROM_CART_FAILURE",
        });
        }
    };
}

export function FetchCartthunk() {
    return async (dispatch) => {
        dispatch({
            type: "CART_FETCHING",
        });
        var result = await requestFunction({
            method: "post",
            url: "https://apifromashu.herokuapp.com/api/cakecart",
            data: {},
            headers: {
                authtoken: localStorage.token,
            },
        });
        if (result) {
            dispatch({
                type: "CART_SUCCESS",
                payload: result.data.data,
            });
        } else {
        dispatch({
            type: "CART_FAILURE",
        });
        }
    };
}

export function OrderPlacedthunk(data) {
    return async (dispatch) => {
        dispatch({
            type: "ORDER_PLACED_FETCHING",
        });
        var result = await requestFunction({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/addcakeorder",
        data: data,
        headers: {
            authtoken: localStorage.token,
        },
        });
        if (result) {
        dispatch({
            type: "ADD_ORDER_PLACED_SUCCESS",
            payload: result.data.data,
        });
        } else {
        dispatch({
            type: "ADD_ORDER_PLACED_FAILURE",
        });
        }
    };
}

export function FetchAllOrderthunk() {
    return async (dispatch) => {
        dispatch({
            type: "ALL_ORDER_FETCHING",
        });
        var result = await requestFunction({
            method: "post",
            url: "https://apifromashu.herokuapp.com/api/cakeorders",
            data: {},
            headers: {
                authtoken: localStorage.token,
            },
        });
        if (result) {
            dispatch({
                type: "ALL_ORDER_SUCCESS",
                payload: result.data,
            });
            console.log("fetch Order success : " + JSON.stringify(result.data))
        } else {
            dispatch({
                type: "ALL_ORDER_FAILURE",
            });
        }
    };
}
