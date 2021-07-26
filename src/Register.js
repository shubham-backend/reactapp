import { useEffect, useState } from "react"
import axios from 'axios';
import {Link} from "react-router-dom"

export default function Register()
{

    let userInfo ={}

    var registerPost =  function(){
        console.log("Registered Info", userInfo)
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

    var handleName = function(e){
        userInfo.name = e.target.value
    }

    var handleEmail = function(e){
        userInfo.email = e.target.value
    }

    var handlePassword = function(e){
        userInfo.password = e.target.value
    }

    return (
        <div>
            <div className="main">
                <p className="sign" align="center">Sign Up</p>
                <div className="form1">
                    <input onChange={handleName} className="un" type="name" placeholder="Enter Name "></input>
                    <input onChange={handleEmail} className="un" type="email" placeholder="Enter Email"></input>
                    <input onChange={handlePassword} className="pass" type="password" placeholder="Enter Password"></input>
                    <button className="btn btn-primary submit"  onClick={registerPost} id="register">Register</button>
                    <p className="forgot" align="center"><Link to="/login">Back to Login</Link></p>   
                </div>   
            </div>
        </div>
    )
}
