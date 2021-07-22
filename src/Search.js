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
        console.log("Query Changed" + query.q);
        console.log("env"+process.env.REACT_APP_BASE_API_URL);
        let apiUrl = "https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q
        axios({
            url: apiUrl,
            method: 'get'
        }).then((response)=>{
            console.log("success", response.data.data);
            setCakes(response.data.data);
            console.log("Matches Cake List",cakes);
        },(error)=>{
            console.log("error", error);
        })
    },[query.q])

    console.log("here1",cakes);
    return (
    
            <div className="row">
                Search Page : Search for these Cake -- {query.q}
                {cakes.map((each,index)=>{
                    console.log(each.name);
                    console.log(each.image);
                    console.log(each.price);
                    console.log(each.cakeid);


                <div className="card" style={cakeStyle}>
                    <Link to={"/cake/"+each.cakeid}><img src={each.image} className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h5 className="card-title">{each.name}</h5>
                        <p className="card-text">₹{each.price}</p>
                        {each.discount && <p>Discount: {each.discount}</p>}
                    </div>
                </div>
                })}
            </div>
        
    )
}

export default Search