import { useState } from "react"
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cake from "./Cake";

function Navbar(props) {

  toast.configure() 
  const notify = (message) => toast(message);

  //alert('Rendering navbar')
  let [searchtext,setSearchText] = useState()
  //let searchtext
  let handleSearchtext = (e)=>{
    //searchtext = e.target.value
    setSearchText(e.target.value)
  }
  let search =() => {
    if(searchtext == "" || searchtext == undefined){
      notify("Oops!! You haven't search anything in seach bar.")
    }else {
      props.fun(searchtext)
      props.history.push("search?q="+searchtext)
    }
  }

  function logout(){
    localStorage.clear()
    window.location.reload()
  }
  var cakesvg = "cake.svg";
  var profilesvg = "profile.svg";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/"><a className="navbar-brand">{props.children} Cake Shop</a></Link><img style={{"height" : "45px"}} src={cakesvg} alt="Cake Online" />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <div className="form-inline my-2 my-lg-0">
          
          {/* Method 1 but it's directly defined and get value */}
          {/* <input id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search your favourite cake..." aria-label="Search"></input>
          <button onClick={()=>{props.fun(document.getElementById('searchinput').value)}} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          
          {/* Method 2 but it's decalare first of line, defined and get value */}
          
        </div>
      </ul>
      <div className="form-inline my-2 my-lg-0">
          {console.log(">>>>>>>>>>>>>>>>>>>>skg>>>>>>>>>>>>>>>>>>>>>>>",props.location.pathname)}
      {(props.location.pathname == '/' || props.location.pathname == '/search') &&
        <div>
          <input onChange={handleSearchtext} className="form-control mr-sm-2" type="search" placeholder="Search your favourite cake..." aria-label="Search"></input>
          <button onClick={search} className="btn btn-success search" type="submit">Search</button>
        </div>
      }

      {props.isUserLoggedIn == false && 
      <div className="btn-spc">
      <Link to="/login"><button className="submit my-2 my-sm-0" type="submit">Login</button></Link>
      <Link to="/signup"><button className="submit my-2 my-sm-0" type="submit">Signup</button></Link>
      {/* <Link to="/signup" className="btn btn-primary my-2 my-sm-0" type="submit">Signup</Link> */}
      </div>}
      {console.log(">>>>>>>>>>>>>>>",props)}
      {props.isUserLoggedIn == true && 
      <div>
      {props.children && <li className="navbar-brand">
      Welcome {props.children} 
      {/* Task - props.name */}
      </li>} <img style={{"height" : "45px"}} src={profilesvg} alt="Cake Online" />
      <Link to="/cart-details" className="cart">
      <svg class="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>Cart 
        </Link>
        <button onClick={logout} className="btn btn-danger my-2 my-sm-0" type="submit">Logout</button>
      </div>}


      </div>
    </div>
  </nav>
  )
}   

Navbar = withRouter(Navbar)
export default connect(function(state,props){
  console.log(".............. >>state" , state)
  return {
    isUserLoggedIn : state["AuthReducer"]["isUserLoggedIn"],
    name:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"]
  }
})(Navbar)