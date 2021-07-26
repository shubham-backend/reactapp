import {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
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
			<div className="row" style={this.state.stl}>
			{!this.state.isCakeloaded && <loader> Loading appears here....</loader>}
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
		)
	}

}

export default CakeList