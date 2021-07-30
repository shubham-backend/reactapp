import { useState } from "react"
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      notify("Please enter something in search")
    }else {
      props.fun(searchtext)
      props.history.push("search?q="+searchtext)
    }
  }

  function logout(){
    localStorage.clear()
    window.location.reload()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/"><a className="navbar-brand">{props.children} Cake House</a></Link>
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

      {props.isUserLoggedIn == false && 
      <div className="btn-spc">
      <input onChange={handleSearchtext} className="form-control mr-sm-2" type="search" placeholder="Search your favourite cake..." aria-label="Search"></input>
      <button onClick={search} className="btn btn-success search" type="submit">Search</button>
      <Link to="/signup"><button className="submit my-2 my-sm-0" type="submit">Signup</button></Link>
      <Link to="/login"><button className="submit my-2 my-sm-0" type="submit">Login</button></Link>
      {/* <Link to="/signup" className="btn btn-primary my-2 my-sm-0" type="submit">Signup</Link> */}
      </div>}
      {console.log(">>>>>>>>>>>>>>>",props)}
      {props.isUserLoggedIn == true && 
      <div>
      {props.name && <li className="navbar-brand">
      Welcome {props.name}
      </li>}
      <button onClick={logout} className="btn btn-danger my-2 my-sm-0" type="submit">Logout</button>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Cart</button>
      </div>}
      {/* <Link to="/add-cake" className="btn btn-primary my-2 my-sm-0" type="submit">Add Cake</Link>  } */}


      </div>
    </div>
  </nav>
  )
}   

Navbar = withRouter(Navbar)
export default connect(function(state,props){
  return {
    isUserLoggedIn : state["AuthReducer"]["isUserLoggedIn"],
    name:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"]
  }
})(Navbar)