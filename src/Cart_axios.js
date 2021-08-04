import { useEffect, useState } from "react"
import { connect } from "react-redux"

function Cart(props)
{
	// var [cartdetails, setcartdetails] = useState({})
    // let userLoginToken = localStorage.getItem("token")
    // if(userLoginToken == null)
    // {
    //     props.history.push('/login')
    // }
    // let cakeInfo ={}
    // useEffect(() => {
    //     let apiUrl = process.env.REACT_APP_BASE_API_URL+"/cakecart"
    //     console.log("Cart Api",apiUrl);
	// 	axios({
	// 		url: apiUrl,
	// 		method: 'post',
    //         requestObj: {},
    //         headers: {
	// 			authtoken: userLoginToken,
	// 		}
	// 	}).then((response)=>{
	// 		console.log("Cart Details success", response.data);
    //         setcartdetails(response.data)
	// 	},(error)=>{
	// 		console.log("error", error);
	// 	})
    // },[])
 let [cartCake, setCartCake] = useState([])
    // useEffect(()=>{
    //     props.dispatch({
    //         type:"Cart_Items"
    //     })
    //     setCartCake(props.cartitems)
    // })
    //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>", cartCake);
    return (

        <div>
            <h1>Cart Page</h1>
        </div>
    )
}

export default connect((state,props) =>{
    return { 
        cartitems : state["CakeCart"]["cartitems"] || [] 
    }
})(Cart)