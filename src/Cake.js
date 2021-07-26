import {Link} from "react"
let Cake = (props)=>{
    console.log("Props are ", props);
    // props.data.name = "Some Cake";
    // props.chef = "shubham";
    let cakeStyle = {width: "16.1em"};
    // console.log("ImAGE",props.data.image);
    alert('cake');
    if(props.data){
    return (
        <div className="card" style={cakeStyle}>
            <Link to={"/cake/"+props.data.cakeid}><img src={props.data.image} className="card-img-top" alt="..." /></Link>
            <div className="row">
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">₹{props.data.price}</p>
                    {props.data.discount && <p>Discount: {props.data.discount}</p>}
                </div>
            </div>
        </div>
    )
    }
    else {
        return null
    }
}

export default Cake