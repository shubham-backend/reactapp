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
			"marginRight": "0px",
			"marginLeft": "83px",
			"marginTop": "0px",
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
			
				<div className="card" style={{width:"18em"}}>
				  	<Link to={"/cake/"+cake.cakeid}><img className="card-img-top" ket={index} src={cake.image} alt="Card image cap"/></Link>
				  <div className="card-body">
					<h5 className="card-title">{cake.name}</h5>
					<p className="card-text">{cake.price}</p>
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