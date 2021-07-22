import  Navbar  from "./Navbar";
import {Carousel} from "./Carousel";
import Cake from "./Cake";
import Login from "./Login";

var data = {
  name:"Ashu",
  role:"Trainer"
}
var users = ["shubham", "gupta"]
var something = function(){}

export default function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="row">
        <Cake x="ashu" y="shubham" z="ganesh" a={data} b={users} c={something} />
      </div>
    </div>
  )
}
