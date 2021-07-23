import { useState } from "react"
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"

function HomeNavbar(props) {
    console.log(props);
  //alert('Rendering navbar')
  let [searchtext,setSearchText] = useState()
  //let searchtext
  let handleSearchtext = (e)=>{
    //searchtext = e.target.value
    setSearchText(e.target.value)
  }
  let search =() => {
    props.fun(searchtext)
    props.history.push("search?q="+searchtext)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">{props.children} Cake House</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <div className="form-inline my-2 my-lg-0">
          <input onChange={handleSearchtext} className="form-control mr-sm-2" type="search" placeholder="Search your favourite cake..." aria-label="Search"></input>
          <button onClick={search} className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </ul>
      <div className="form-inline my-2 my-lg-0">
          <p></p>
        <button className="btn btn-danger my-2 my-sm-0" type="submit">Logout</button>
        <button className="btn btn-primary my-2 my-sm-0" type="submit">Cart</button>
      </div>
    </div>
  </nav>
  )
}   

export default withRouter(HomeNavbar)