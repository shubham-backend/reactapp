import {Component} from "react"
import {Link, withRouter} from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"
import React from 'react';
import Loader from "react-loader-spinner";
import { useEffect, useState } from "react"

function CakeList(props) {
	var [cakes ,setcakes] = useState([])
    var [loader,setloader] = useState(true)
	let stl = {
		display: "flex",
		"justifyContent": "center",
		"flexFlow": "wrap row",
		"alignItems": "flex-start",
		"marginTop": "40px"
	}

	let cakestl = {
		width: "20em", 
		margin: "0 15px 10px 0",
		padding: "1em 0",
	}
		
		useEffect(() => {
			if (props.cakes.length == 0){
				setTimeout(()=>{
					let apiurl = "https://apifromashu.herokuapp.com/api/allcakes"
					axios({
						url: apiurl,
						method: 'get'
					}).then((response)=>{
						localStorage.setItem('cakes',JSON.stringify(response.data.data))
						props.dispatch({
							type:"CAKELIST",
							payload:response.data.data
						})
						setcakes(response.data.data)
						setloader(false)
					},(error)=>{
						console.log("error", error);
					})
					
				},5000) 
			} else {
				setcakes(props.cakes)
       			setloader(false)
			}
		}, []); 
	console.log(">>>>>>>>>>>>>>>>..",cakes);

		return 	(
			<div style={{ textAlign: "center" }}>
			{loader && 
			<Loader
				type="Circles"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
			}
			<div className="row" style={stl}>
			{cakes.map((cake,index) =>(
				
				<div className="card hvimg" style={cakestl}>
				  	<Link to={"/cake/"+cake.cakeid}><img className="card-img-top hvimg1"  key={index} src={(cake.image !== 'blob:http://localhost:3000/fd6aa672-e0e2-44de-a831-facfed923aae') ? cake.image : 'https://res.cloudinary.com/ashudev/image/upload/v1624003710/s3ddfink2vj0tys1os0q.jpg'} alt="Card image cap"/></Link>
				  <div className="card-body">
					<h5 className="card-title">{cake.name}</h5>
					<p className="card-text">₹{cake.price}</p>
					<Link to={"/cake/"+cake.cakeid}><button className="submit cakedetails" style={{"textAlign":"center", "margin":"auto", "fontSize": "inherit"}}>Cake Details</button></Link>
					{cake.discount &&<p className="card-text">Discount : {cake.discount}</p>}
				  </div>
				</div>
			))}
			</div>
			</div>
		)
}

CakeList = withRouter(CakeList)
export default connect(function(state,props){
	return {
		cakes: state["CakeListReducer"]["cakes"] 
	}
})(CakeList)