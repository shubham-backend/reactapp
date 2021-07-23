import  Navbar  from "./Navbar";
import {Carousel} from "./Carousel";
import Cake from "./Cake";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Register from "./Register";
//import Search from "./Search_whole_data.js";
import Search from "./Search";
import AddCake from "./AddCake";
import FileUpload from "./FilesUploadComponent";
import Loader from "react-loader-spinner";
//import CakeList from "./CakeList";
import Cakedetails from "./Cakedetails";
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from "react-router-dom"
import { useState } from "react";
let trainee = ["Shubham", "Kumar", "Gupta"]

export default function App() {
  
  let  Cake1 = {
    name:"Pineapple Cakes",
    price:600,
    image:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/7-Pineapple-Cakes.jpg",
  }
  
  let  Cake2 = {
    name:"Chocolate Cakes",
    price:600,
    image:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/1-Chocolate-Cakes.jpg",
  }

  let preventfromcopy = function (e) {
    alert("Hey you stop doing that! this will be reported to your HR!")
    e.preventDefault()
    //return false
  }

  let [searchtext, setSearchtext] = useState()
  let function1 = function(searchString){
    alert("Son told the answer - " + searchString)
    setSearchtext(searchString)
  }

  var [isUserLoggedIn, setUserLogin] = useState(false)
  function loggedin()
  {
    setUserLogin(true)
  }

  return (
    <div>
      <Router>
      {/* <Navbar fun= {function1}>Shubham Gupta</Navbar> */}
      <Navbar isUserLoggedIn={isUserLoggedIn}>Shubham Gupta</Navbar>

      {/* <Search searchquery={searchtext}/> */}
      <Switch>
      <Route path = "/navbar" exact component={Navbar} />
      <Route path = "/" exact component={Home} />
      {/* <Route path = "/login" exact component={Login} />  */}
      <Route exact path ="/login"> <Login loggedin={loggedin}/></Route>
      <Route path = "/signup" exact component={Register } /> 
      <Route path = "/search" exact component={Search} /> 
      <Route path = "/add-cake" exact component={AddCake} /> 
      <Route path = "/cake/:cakeid" exact component={Cakedetails} /> 
      <Route path = "**"><Redirect to ="/"></Redirect></Route>
      </Switch>
      </Router>

      {/* <Signup name="Shubham Gupta"></Signup>
      <Login />
      <Search /> */}
      {/* <FileUpload />
      <CakeList />
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
      {/* <Navbar>Shubham Gupta <Carousel></Carousel></Navbar> */}
      {/* <Carousel />
      <Register /> */}
        {/* <div className="row">
          <input onCopy={preventfromcopy}></input>
          <Cake data={Cake1} />
          <Cake data={Cake2} />
          {trainee.map((each,index)=>{
            return <label key={index} className="alert alert-warning">{each}</label>
          })}
        </div> */}
    </div>
  )
}

