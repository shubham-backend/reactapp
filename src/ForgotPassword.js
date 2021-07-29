import { useEffect, useState } from "react"
import axios from 'axios';
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword(props){

    toast.configure() 
    const notify = (message) => toast(message);

    let user ={}
    var [errorMessage, setErrorMessage] = useState()
    let msg = "";
    
    var forgotPost = function(){
    var apiUrl =process.env.REACT_APP_BASE_API_URL+"/recoverpassword";
    axios({
        url:apiUrl,
        method:'post',
        data:user
    }).then((response) => {
        console.log("Forgot Password Info", response)
        if(response.data){
            if(response.data.errorMessage){
                msg="Please Enter your registered email."
                notify(msg)
            } else if(response.data.message) {
                notify(response.data.message)
            } 
        } else {
            msg = "Invalid Credentials";
            notify(msg)
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