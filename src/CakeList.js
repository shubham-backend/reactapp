import {Component} from "react"
import {Link, withRouter} from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"
import React from 'react';
import Loader from "react-loader-spinner";

class CakeList extends Component{
	constructor(props){
		super(props)
		this.state = { isCakeloaded : false, cakes : []}
		//console.log("Reducers props shubham", localStorage.cakes);
		// this.setState({
		// 	cakes : props.cakes['data']
		// })
		// if(localStorage.cakes != null){
		// 	this.setState({
		// 		cakes : localStorage.cakes,
		// 		isCakeloaded: true
		// 	})
		// }else {
			setTimeout(()=>{
				let apiurl = "https://apifromashu.herokuapp.com/api/allcakes"
				axios({
					url: apiurl,
					method: 'get'
				}).then((response)=>{
					localStorage.setItem('cakes',JSON.stringify(response.data.data))
					this.props.dispatch({
						type:"CAKELIST",
						payload:response.data
					})
					this.setState({
						cakes : response.data.data, //props.cakes['data'],
						isCakeloaded: true
					})
				},(error)=>{
					console.log("error", error);
				})
				
			},5000)
		//}
		
		this.state.stl = {
			display: "flex",
			"justifyContent": "center",
			"flexFlow": "wrap row",
			"alignItems": "flex-start",
    		"marginTop": "40px"
		}

		this.state.cakestl = {
			width: "20em", 
			margin: "0 15px 10px 0",
			padding: "1em 0",
		}

	}
	render(){
		return 	(
			<div style={{ textAlign: "center" }}>
			{!this.state.isCakeloaded && 
			// <loader> Loading appears here....</loader>
			<Loader
				type="Circles"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
			}
			<div className="row" style={this.state.stl}>
			{this.state.isCakeloaded && this.state.cakes.map((cake,index) =>(
			
				<div className="card hvimg" style={this.state.cakestl}>
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

}

CakeList = withRouter(CakeList)
export default connect(function(state,props){
	return {
		cakes: state["CakeListReducer"]["cakes"] 
	}
})(CakeList)