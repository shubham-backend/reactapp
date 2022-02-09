import { useEffect, useState } from "react"
import axios from 'axios';
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register()
{

    toast.configure() 
    const notify = (message) => toast(message);
    //let userInfo ={}
    var [userInfo, setUserInfo] = useState({})
    var[errorName,setErrorName] = useState(null)
    var[errorEmail,setErrorEmail] = useState(null)
    var[errorPassword,setErrorPassword] = useState(null)

    var registerPost =  function(e){
        console.log("Registered Info", userInfo)
        if(userInfo.length == undefined) {
            e.preventDefault();
            setErrorName('');
            setErrorEmail('');
            setErrorPassword('');
            if(!userInfo.name){
                setErrorName("Name field is required");
            }
            if(!userInfo.email){
                setErrorEmail("Email field is required");
            } 
            if(!userInfo.password){
                setErrorPassword("Password field is required");
            }
            notify('Please fill all the details.')
        } else {
            var apiUrl ="https://apifromashu.herokuapp.com/api/register";
            axios({
                url:apiUrl,
                method:'post',
                data:userInfo
            }).then((response) => {
                console.log("Register Info", response)
            }, (error)=>{
                console.log("Error - resgiter API", error)
            })
        }
    }

    var handleName = function(e){
        userInfo.name = e.target.value
        setUserInfo(userInfo)
    }

    var handleEmail = function(e){
        userInfo.email = e.target.value
        setUserInfo(userInfo)
    }

    var handlePassword = function(e){
        userInfo.password = e.target.value
        setUserInfo(userInfo)
    }
    var divImage = {
        //backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
        backgroundImage: "cake-background.jpg"
    };
    let bgImage = "cake-background.jpg"
    return (
        <div style={{height: "300px","backgroundSize": "cover", backgroundRepeat: "no-repeat"}}>
            <div className="main">
                <p className="sign" align="center">Sign Up</p>
                <div className="form-group">
                    <input onChange={handleName} className="un" type="name" placeholder="Enter Name "></input>
                    <div className="text-danger" style={{margin:"-15px"}}>{errorName}</div>
                </div>
                <div className="form-group">
                    <input onChange={handleEmail} className="un" type="email" placeholder="Enter Email"></input>
                    <div className="text-danger" style={{margin:"-15px"}}>{errorEmail}</div>
                </div>
                <div className="form-group">
                    <input onChange={handlePassword} className="pass" type="password" placeholder="Enter Password"></input>
                    <div className="text-danger" style={{margin:"-15px"}}>{errorPassword}</div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary submit" style={{margin:"5px"}} onClick={registerPost} id="register">Register</button>
                    <p className="forgot" align="center" style={{margin:"1px"}}><Link to="/login">Back to Login</Link></p>   
                </div>
            </div>   
        </div>
    )
}
