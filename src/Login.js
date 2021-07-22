import { useEffect, useState } from "react"
import axios from 'axios';

function Login(props){
    let user ={}
    var [errorMessage, setErrorMessage] = useState()

var loginPost = function(){
    console.log("User has entered ", user);
    var apiUrl ="https://apifromashu.herokuapp.com/api/login";
    //var apiUrl = process.env.REACT_BASE_API_URL+'login';
    axios({
        url:apiUrl,
        method:'post',
        data:user
    }).then((response) => {
        console.log("Login Info", response)
        if(response.data.token){
            localStorage.token = response.data.token
            props.history.push("/")
        }
    }, (error)=>{
        console.log("Error - Login API", error)
    })
}

useEffect(()=>{
    alert('here');
},[errorMessage])


var handleEmail = function(e){
    user.email = e.target.value
}
var handlePassword = function(e){
    user.password = e.target.value
}

return (
        <div>
            <h1>Login Page</h1>
            <input onChange={handleEmail} className="form-control" type="email" placeholder="Enter Email " aria-label="Search"></input>
            <input onChange={handlePassword} className="form-control" type="password" placeholder="Enter Password" aria-label="Search"></input>
            <button className="btn btn-primary"  onClick={loginPost} id="login">Login</button>
        </div>
    )
}
export default Login