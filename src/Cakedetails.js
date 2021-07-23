import { useEffect } from "react";
import axios from "axios"

function Cakedetails(props){
    useEffect(() => {
        let apiUrl = "https://apifromashu.herokuapp.com/api/cake/"+props.match.params.cakeid
        console.log("Api",apiUrl);
		axios({
			url: apiUrl,
			method: 'get'
		}).then((response)=>{
			console.log("success", response.data.data);
		},(error)=>{
			console.log("error", error);
		})
    },[])
console.log(props.match.params);
    return(
        <div>
            Cake details page {props.match.params.cakeid}
        <div className="container">
		    <div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src="https://res.cloudinary.com/ashudev/image/upload/v1623076144/x6svihz4ldsybxj5r3t1.jpg" /></div>
						  {/* <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div> */}
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  {/* <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li> */}
						  {/* <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li> */}
						</ul>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">Molten chocolate cake</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">41 Reviews</span>
						</div>
						<p className="product-description">A chocolate cake is a cake made with chocolate or cocoa. The ingredients are put into a bowl and mixed together; then the mixed ingredients are put into a cake tin and put in an oven until it is fully cooked. Then the cake is taken out of the oven and placed on a cooling stand. If the cake maker wants to, they can ice the cake, when it has cooled down, by spreading thick icing on it. Chocolate cakes are a sold in shops as well as made at home. They are a sweet food and should not be eaten all the time, which would be unhealthy. There are many different types of chocolate cake, depending on the recipe and different types of chocolate used.</p>
						<h2 className="price">Current price: <span>₹ 315</span></h2>
						<h2 className="price">Weight: <span>O.5 Kg</span></h2>
						<h2 className="price">Flavour: <span>Chocolate</span></h2>
						<h3 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">S</span>
							<span className="size" data-toggle="tooltip" title="medium">M</span>
							<span className="size" data-toggle="tooltip" title="large">L</span>
							<span className="size" data-toggle="tooltip" title="xtra large">XL</span>
						</h3>
						<h3 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color chocolate"></span>
						</h3>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
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