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
		
		setTimeout(()=>{
			let apiurl = "https://apifromashu.herokuapp.com/api/allcakes"
			axios({
				url: apiurl,
				method: 'get'
			}).then((response)=>{
				console.log("success", response.data.data);
				this.setState({
					cakes : response.data.data,
					isCakeloaded: true
				})
				localStorage.setItem('cakes',JSON.stringify(response.data.data))
				this.props.dispatch({
					type:"CAKELIST",
					payload:response.data
				})
			},(error)=>{
				console.log("error", error);
			})
			
		},5000)
		
		this.state.stl = {
			display: "flex",
			"margin-right": "0px",
			"margin-left": "137px",
			"margin-top": "0px",
		}
	}
	
	render(){
		return 	(
			<div style={{ textAlign: "center" }} >
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
				  	<Link to={"/cake/"+cake.cakeid}><img className="card-img-top" src={cake.image} alt="Card image cap"/></Link>
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
	console.log(props);
	console.log("props", state["CakeListReducer"]["cakes"]);
  return {
    cakes: state["CakeListReducer"]["cakes"] 
  }
})(CakeList)