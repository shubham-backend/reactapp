import  Navbar  from "./Navbar";
import {Carousel} from "./Carousel";
import Cake from "./Cake";
import Login from "./Login";

let trainee = ["Shubham", "Kumar", "Gupta"]
function App() {
  
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

  return (
    <div>
      <Navbar />
      <Carousel />
      <Login />
      <div className="row">
        <Cake data={Cake1} />
        <Cake data={Cake2} />
        {/* <Cake chef="Gupta" /> */}
      </div>
      <div className="row">
        <h1>trainees List</h1>
        <label>{trainee[0]}</label>
        <label>{trainee[1]}</label>
        <label>{trainee[2]}</label>
        {trainee.map((each,index)=>{
          return <label key={index} className="alert alert-warning">{each}</label>
        })}
      </div>
    </div>
  )
}

export default App;
