import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios"

axios.interceptors.request.use((request)=>{
  console.log("......" , request.url)
    if(request.url.includes("upload") || request.url.includes("cart") ){
      if(localStorage.token){
      request.headers["authtoken"] = localStorage.token
      } 
    } 
   return request
  }, (error)=>{
  return Promise.reject(error)
  }) 

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
