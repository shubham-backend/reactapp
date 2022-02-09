import { useEffect, useState } from "react"
import axios from 'axios';
import {Link, withRouter} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Component} from "react"
import { connect } from "react-redux"
import { Loginthunk } from "./reduxstores/thunks"

function Login(props){
    toast.configure() 
    const notify = (message) => toast(message);

    //let user ={}
    var [errorMessage, setErrorMessage] = useState()
    var [user, setUser] = useState({})
    var[errorEmail,setErrorEmail] = useState(null)
    var[errorPassword,setErrorPassword] = useState(null)
    let msg="";
    
    useEffect(()=>{
        //Code
    },[errorMessage])
    
    var handleEmail = function(e){
        user.email = e.target.value
        setUser(user)
    }
    var handlePassword = function(e){
        user.password = e.target.value
        setUser(user)
    }
    
    console.log("user -", user);

var loginPost = function(e){
    console.log(user);
    if(!user.email || !user.password) {
        e.preventDefault();
            setErrorEmail('');
            setErrorPassword('');
            if(!user.email){
                setErrorEmail("Email field is required.");
            } 
            if(!user.password){
                setErrorPassword("Password field is required.");
            }
        notify('Please enter email or password.')
    }
    if(user.email && user.password)
    {
        console.log("User has entered ", user);
        var apiUrl ="https://apifromashu.herokuapp.com/api/login";
        axios({
            url:apiUrl,
            method:'post',
            data:user
        }).then((response) => {
            console.log("Login Info", response)
            if(response.data.token){
                //props.loggedin(true)
                props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                })
                localStorage.token = response.data.token
                localStorage.setItem('token',response.data.token)

                //toast("Login Successfully!!");
                msg="Success !! Login Successfully!!";
                notify(msg)
                props.history.push("/")
            } else {
                msg="Oops !! Invalid Credentials.!!";
                <ToastContainer  />
                notify(msg)
                //alert("Invalid Credentials")
            }
        }, (error)=>{
            <ToastContainer  />
            notify("Oops !! Please enter Email or Password.")
            console.log("Error - Login API", error)
        })
    }
    //props.dispatch(Loginthunk(user))

}

return (
        <div>
            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <div className="form-group">
                    <input className="un" onChange={handleEmail}  type="text" align="center" placeholder="Enter Email" />
                    <div className="text-danger" style={{margin:"-11px"}}>{errorEmail}</div>
                </div>
                <div className="form-group">
                    <input className="pass" onChange={handlePassword} type="password" align="center" placeholder="Enter Password" />
                    <div className="text-danger" style={{margin:"-15px"}}>{errorPassword}</div>
                </div>
                <div className="form-group">
                    <button className="submit" align="center" style={{marginTop:"10px"}} onClick={loginPost} id="login">Sign in</button>
                    <p className="forgot" align="center"><Link to="/forgot-password">Forgot Password?</Link></p>
                    <p className="forgot" align="center"><Link to="/signup">Not a member? Signup now</Link></p>   
                </div>
            </div>   
        </div>
    )
}
//Withrouter is adding props to login component
Login = withRouter(Login)
export default connect()(Login)
