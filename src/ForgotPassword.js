import { useEffect, useState } from "react"
import axios from 'axios';
import {Link} from "react-router-dom"

function ForgotPassword(props){
    let user ={}
    var [errorMessage, setErrorMessage] = useState()

var forgotPost = function(){
    var apiUrl =process.env.REACT_APP_BASE_API_URL+"/recoverpassword";
    axios({
        url:apiUrl,
        method:'post',
        data:user
    }).then((response) => {
        console.log("Login Info", response)
        if(response.data){
            //this.props.loggedin(true)
        } else {
            alert("Invalid Credentials")
        }
    }, (error)=>{
        console.log("Error - Forgot Password API", error)
    })
}

useEffect(()=>{
    //Code
},[errorMessage])


var handleEmail = function(e){
    user.email = e.target.value
}

return (
        <div>
            <div className="main fgp">
                <p className="sign" align="center">Forgot Password</p>
                <div className="form1">
                    <input className="un" onChange={handleEmail}  type="text" align="center" placeholder="Enter Registered Email" />
                    <button className="submit" align="center" onClick={forgotPost} id="login">Submit</button>
                    <p className="forgot" align="center"><Link to="/login">Back to Login</Link></p>   
                </div>   
            </div>
        </div>
    )
}
export default ForgotPassword