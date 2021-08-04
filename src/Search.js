import queryString from "query-string"
import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import Loader from "react-loader-spinner";

function Search(props)
{
    let query = queryString.parse(props.location.search)
    console.log("Query is "+query.q);
    let cakeStyle = {width: "16.1em"};
    let [cakes,setCakes] = useState([]);
    let [loading,setLoading] = useState(true)

    useEffect(()=>{
        let apiUrl = process.env.REACT_APP_BASE_API_URL+"/searchcakes?q="+query.q
        console.log(apiUrl);
       
        axios({
            url: apiUrl,
            method: 'get'
        }).then((response)=>{
            setLoading(false);
            setCakes(response.data.data);
        },(error)=>{
            console.log("error", error);
        })
    },[query.q])

    return (
        <div>
            {loading && 
			// <loader> Loading appears here....</loader>
			<Loader
				type="Circles"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
			}
        <div className="row cake">
            {/* Search Page : Search for these Cake -- {query.q} */}
            {cakes && cakes.length > 0 && cakes.map((each,index)=>{
                return(
                <div className="card" style={cakeStyle}>
                    <Link to={"/cake/"+each.cakeid}><img src={each.image} className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h5 className="card-title">{each.name}</h5>
                        <p className="card-text">₹{each.price}</p>
                    </div>
                </div>
                )
            }) }
            <div className="alert alert-success nodatafound" role="alert">
                <h4 className="alert-heading">Oops !!</h4>
                <hr></hr>
                {cakes.length == 0 &&
                <p className="mb-0">No data found.</p>}
            </div>
        
        </div>
        </div>
    )
}
export default Search