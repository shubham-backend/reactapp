import { connect } from "react-redux"
import { useEffect, useState } from "react"
import {withRouter} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import {AddToCartthunk, Removeonefromcartthunk, Removefromcartthunk} from "./reduxstores/thunks"
function Cart(props){
    let [CakeCarts, setCakeCart] = useState([])
    var[loader,setloader]=useState(true)
    var total = 0;
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            props.history.push("/login")
            toast.error("You need to login first")
        } else {
            props.dispatch({
                type:"Cart_Items"
            })						
        }
        setloader(false)
        setCakeCart(props.CakeCartItem)
    },[])

    //Remove One Whole Cake Row Deleted
    function removeCakeFromCart(cake) {
        props.dispatch(
            Removefromcartthunk({'cakeid': cake.cakeid})
            //type:"removeItemFromCart",
            //payload:{'cakeid': cake.cakeid}
        )
        setCakeCart(props.CakeCartItem)
        setloader(false)
        toast.error("Cake Deleted successfuly from your cart.")
    }

    function removeOneCakeQuatityFromCart(cakeData){
        cakeData.quantity = cakeData.quantity - 1
        props.dispatch(
            Removeonefromcartthunk(cakeData)
            //type:"Remove_One_Cake_Items",
            //payload: cakeData
        )
        // console.log("props=",props)
        setCakeCart(props.CakeCart)
        setloader(false)
        toast.error("Cake Updated successfuly.")
    }

    function addOneCakeQuatityFromCart(cakeData){
        cakeData.quantity = cakeData.quantity +1
        props.dispatch(
            AddToCartthunk(cakeData)
        )
        setCakeCart(props.CakeCart)
        setloader(false)
        toast.error("Cake Added successfuly.")
    }
    return (
        <div>
           {!props.CakeCartItem && 
			<Loader
				type="Circles"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000}
			/>
			}
            {props.CakeCartItem &&
            <div className="px-4 px-lg-0">
                <div className="container text-white py-5 text-center">
                    <h1 className="display-4">My Cart</h1>
                    <p className="lead mb-0">Shopping Cart Details </p>
                </div>
                <div className="pb-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                        <div className="table-responsive">
                            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="p-2 px-3 text-uppercase">Product</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Price</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Quantity</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Remove</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {props.CakeCartItem && props.CakeCartItem.map((cake,index) =>(
                                <tr key={index}>
                                    <th scope="row" className="border-0">
                                        <div className="p-2">
                                        <img src={cake.image} alt="" width="70" className="img-fluid rounded shadow-sm" />
                                        <div className="ml-3 d-inline-block align-middle">
                                            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle" key={index}>{cake.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Weight: {cake.weight} Kg</span>
                                        </div>
                                        </div>
                                    </th>
                                    <td className="border-0 align-middle">
                                        <strong>₹ {cake.price}</strong>
                                    </td>
                                    <td className="border-0 align-middle">
                                        <div className="quantity">
                                            <button className="plus-btn" type="button" name="button" onClick={(e)=>{addOneCakeQuatityFromCart(cake)}}>
                                                <img src="plus.svg" alt="" />
                                            </button>
                                            <input type="text" name="name" value={cake.quantity} />
                                            <button className="minus-btn" type="button" name="button" onClick={(e)=>{removeOneCakeQuatityFromCart(cake)}}>
                                                <img src="minus.svg" alt="" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border-0 align-middle">
                                        <button onClick={(e)=>{removeCakeFromCart(cake)}}><a href="#" className="text-dark">Delete<i className="fa fa-trash"></i></a></button>
                                    </td>
                                    <span className="d-none"> {total += cake.price * cake.quantity}</span>
                                </tr>
		                    )) }
                            </tbody>
                            </table>
                        </div>
                            {props.CakeCartItem.length === 0 && 
                            <div className="alert alert-danger" role="alert" style={{"width": "1083px"}}>
                             No Cake Found.!
                            </div>} 
                        </div>
                    </div>
                    {props.CakeCartItem.length > 0 &&
                    <div className="row py-5 p-4 bg-white rounded shadow-sm">
                        <div className="col-lg-12">
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                        <div className="p-4">
                            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                            <ul className="list-unstyled mb-4">
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>₹ {total}.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>₹ 25.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>₹ 0.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                <h5 className="font-weight-bold">₹ {total+25}.00</h5>
                            </li>
                            </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                        </div>
                        </div>
                    </div>
                    }
                    </div>
                </div>
            </div>
            }  
        </div>
    )
}

Cart = withRouter(Cart)
export default connect(function(state,props){
  return {
    isUserLoggedIn: state["AuthReducer"]["isUserLoggedIn"],
    CakeCartItem:state["CakeCart"]["cartitems"]
  }
})(Cart)