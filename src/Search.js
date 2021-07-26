import queryString from "query-string"
import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"

function Search(props)
{
    let query = queryString.parse(props.location.search)
    console.log("Query is "+query.q);
    let cakeStyle = {width: "16.1em"};
    let [cakes,setCakes] = useState([]);

    useEffect(()=>{
        console.log("Query Changed - " + query.q);
        let apiUrl = process.env.REACT_APP_BASE_API_URL+"/searchcakes?q="+query.q
        console.log(apiUrl);
       
        axios({
            url: apiUrl,
            method: 'get'
        }).then((response)=>{
            console.log("success", response.data.data);
            setCakes(response.data.data);
        },(error)=>{
            console.log("error", error);
        })
    },[query.q])

    console.log("Total Filtered Cakes - ",cakes);
    return (
        <div className="row cake">
            {/* Search Page : Search for these Cake -- {query.q} */}
            {cakes && cakes.length ? cakes.map((each,index)=>{
                return(
                <div className="card" style={cakeStyle}>
                    <Link to={"/cake/"+each.cakeid}><img src={each.image} className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h5 className="card-title">{each.name}</h5>
                        <p className="card-text">₹{each.price}</p>
                    </div>
                </div>
                )
            }) : 
            <div className="alert alert-success nodatafound" role="alert">
                <h4 className="alert-heading">Oops !!</h4>
                <hr></hr>
                <p className="mb-0">No data found.</p>
            </div>}
        </div>
    )
}
export default Search