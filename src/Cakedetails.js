import { useEffect, useState } from "react";
import axios from "axios"
import {Link, withRouter} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cakedetails(props){
	var [cakedetails, setcakedetails] = useState({})
    useEffect(() => {
        let apiUrl = "https://apifromashu.herokuapp.com/api/cake/"+props.match.params.cakeid
        console.log("Api",apiUrl);
		axios({
			url: apiUrl,
			method: 'get'
		}).then((response)=>{
			console.log("success", response.data.data);
			setcakedetails(response.data.data)
		},(error)=>{
			console.log("error", error);
		})
    },[])

	let cakeObj = {
		name : cakedetails.name,
		cakeid : props.match.params.cakeid,
		price : cakedetails.price,
		weight : cakedetails.weight,
		image: cakedetails.image
	}
	console.log(cakeObj);

	function addcaketocart(){

		toast.configure() 
    	const notify = (message) => toast(message);
		var msg ="";
		let userLoginToken = localStorage.getItem("token")
		if(userLoginToken == null)
		{
			props.history.push('/cake'+props.match.params.cakeid)
		}
        
		let apiUrl = process.env.REACT_APP_BASE_API_URL+"/addcaketocart"
		
		axios({
			url: apiUrl,
			method: 'post',
			data: cakeObj,
			headers: {
				authtoken: userLoginToken,
			}
		}).then((response)=>{
			msg="Cake added in cart successfully."
			notify(msg)
			console.log(response.data);
			console.log("Add to Cart success", response.data);
		},(error)=>{
			notify(error)
			console.log("error", error);
		})
	}
    return(
        <div>
            {/* Cake details page {props.match.params.cakeid} */}
        <div className="container">
		    <div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						<div className="tab-pane active" id="pic-1"><img src={cakedetails.image} /></div>
						</div>
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{cakedetails.name}</h3>
						<div className="rating">
							<div className="stars">
								<h5>Rating : </h5>
								{cakedetails.ratings} 
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">{cakedetails.reviews} Reviews</span>
						</div>
						<p className="product-description">{cakedetails.description}</p>
						<h3 className="price">Current price: <span>₹ {cakedetails.price}</span></h3>
						<h3 className="price">Weight: <span>{cakedetails.weight} Kg</span></h3>
						<h3 className="price">Flavour: <span>{cakedetails.flavour}</span></h3>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">S</span>
							<span className="size" data-toggle="tooltip" title="medium">M</span>
							<span className="size" data-toggle="tooltip" title="large">L</span>
							<span className="size" data-toggle="tooltip" title="xtra large">XL</span>
						</h5>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button" onClick={addcaketocart}>add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>

    )
}

export default Cakedetails