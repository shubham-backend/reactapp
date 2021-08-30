import { useEffect, useState } from "react";
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";

function Cakedetails(props){
	var [cakedetails, setcakedetails] = useState({})
    var [loader,setloader] = useState(true)

    useEffect(() => {
        let apiUrl = "https://apifromashu.herokuapp.com/api/cake/"+props.match.params.cakeid
        console.log("Api",apiUrl);
		axios({
			url: apiUrl,
			method: 'get'
		}).then((response)=>{
			console.log("success", response.data.data);
			setcakedetails(response.data.data)
			setloader(false)
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
			notify("You need to login first.")
		} else {
        
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
	}
    return(
        <div>
			{loader ? 
			<Loader
				type="Circles"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
			:
        <div className="container">
		    <div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						<div className="tab-pane active" id="pic-1"><img class="img-cake" src={cakedetails.image} /></div>
						</div>
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{cakedetails.name}</h3>
						<div className="rating">
							<div className="stars">
								<h5>Rating : </h5>
								{cakedetails.ratings}* / <span className="review-no">{cakedetails.reviews} Reviews</span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
						</div>
						<p className="product-description" style={{float:"left"}}>{cakedetails.description} <h4 className="price">Current price: <span>₹ {cakedetails.price}</span><h4 className="price">Weight: <span>{cakedetails.weight} Kg</span></h4><h4 className="price">Flavour: <span>{cakedetails.flavour}</span></h4></h4></p>
						{/* <h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">S</span>
							<span className="size" data-toggle="tooltip" title="medium">M</span>
							<span className="size" data-toggle="tooltip" title="large">L</span>
							<span className="size" data-toggle="tooltip" title="xtra large">XL</span>
						</h5> */}
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button" onClick={addcaketocart}>add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>}
    </div>
    )
}

export default Cakedetails