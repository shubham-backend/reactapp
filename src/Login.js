import { useEffect, useState } from "react"
import axios from 'axios';
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(props){
    toast.configure() 
    const notify = (message) => toast(message);

    let user ={}
    var [errorMessage, setErrorMessage] = useState()
    let msg="";

var loginPost = function(){
    console.log("User has entered ", user);
    var apiUrl ="https://apifromashu.herokuapp.com/api/login";
    axios({
        url:apiUrl,
        method:'post',
        data:user
    }).then((response) => {
        console.log("Login Info", response)
        if(response.data.token){
            this.props.loggedin(true)
            localStorage.token = response.data.token
            //toast("Login Successfully!!");
            msg="Success !! Login Successfully!!";
            notify(msg)
            this.props.history.push("/")
        } else {
            msg="Oops !! Invalid Credentials.!!";
            <ToastContainer  />
            notify(msg)
            //alert("Invalid Credentials")
        }
    }, (error)=>{
        console.log("Error - Login API", error)
    })
}

useEffect(()=>{
    //Code
},[errorMessage])


var handleEmail = function(e){
    user.email = e.target.value
}
var handlePassword = function(e){
    user.password = e.target.value
}

return (
        <div>
            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <div className="form1">
                    <input className="un" onChange={handleEmail}  type="text" align="center" placeholder="Enter Email" />
                    <input className="pass" onChange={handlePassword} type="password" align="center" placeholder="Enter Password" />
                    <button className="submit" align="center" onClick={loginPost} id="login">Sign in</button>
                    <p className="forgot" align="center"><Link to="/forgot-password">Forgot Password?</Link></p>
                    <p className="forgot" align="center"><Link to="/signup">Not a member? Signup now</Link></p>   
                </div>   
            </div>
        </div>
    )
}
export default Login