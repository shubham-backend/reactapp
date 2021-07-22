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
            <h1>Register Page</h1>
            <input onChange={handleName} className="form-control" type="name" placeholder="Enter Name "></input>
            <input onChange={handleEmail} className="form-control" type="email" placeholder="Enter Email"></input>
            <input onChange={handlePassword} className="form-control" type="password" placeholder="Enter Password"></input>
            <button className="btn btn-primary"  onClick={registerPost} id="register">Register</button>
            . {true && <Link to="/login" className="btn btn-primary my-2 my-sm-0" type="submit">Login</Link>}

        </div>
    )
}
