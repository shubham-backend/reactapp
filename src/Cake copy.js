
let cake = {
    name1:"Pineapple Cakes",
    name2:"Chocolate Cakes",
    name3:"Truffle Cakes",
    name4:"Butterscotch Cakes",
    name5:"Black Forest Cakes",
    name6:"Fresh Fruit Cakes",
    name7:"Oreo Cakes",
    name8:"White Forest Cakes",
    name9:"Red Velvet Cakes",
    name10:"Truffle-Cakes",
    price1:100,
    price2:200,
    price3:300,
    price4:400,
    price5:500,
    price6:600,
    price7:700,
    price8:800,
    price9:900,
    price10:1000,
    image1:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/7-Pineapple-Cakes.jpg",
    image2:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/1-Chocolate-Cakes.jpg",
    image3:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/3-Truffle-Cakes.jpg",
    image4:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/4-Butterscotch-Cakes.jpg",
    image5:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/5-Black-Forest-Cakes.jpg",
    image6:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/6-Fresh-Fruit-Cakes.jpg",
    image7:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/10-Oreo-Cakes.jpg",
    image8:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/12-White-Forest-Cakes.jpg",
    image9:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/2-Truffle-Cakes.jpg",
    image10:"https://i7.fnp.com/assets/images/custom/cake-2020/cakes-by-flavor/3-Truffle-Cakes.jpg",

}
var Cake
export default Cake = ()=>{
    let cakeStyle = {width: "16.1em"};
    var rowStyle = ({
        'display': "flex",
        'margin-right': "1px",
        'margin-left': "1px",
        'margin-bottom': "7px"
      });
    return (
        <div className="row" style={rowStyle}>
            <div className="card" style={cakeStyle}>
                <img src={cake.image1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name1}</h5>
                    <p className="card-text">₹{cake.price1}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name2}</h5>
                    <p className="card-text">₹{cake.price2}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name3}</h5>
                    <p className="card-text">₹{cake.price3}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image4} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name4}</h5>
                    <p className="card-text">₹{cake.price4}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image5} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name5}</h5>
                    <p className="card-text">v{cake.price5}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image6} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name6}</h5>
                    <p className="card-text">₹{cake.price6}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image7} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name7}</h5>
                    <p className="card-text">₹{cake.price7}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image8} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name8}</h5>
                    <p className="card-text">₹{cake.price8}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image9} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name9}</h5>
                    <p className="card-text">₹{cake.price9}</p>
                </div>
            </div>
            <div className="card" style={cakeStyle}>
                <img src={cake.image10} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cake.name10}</h5>
                    <p className="card-text">₹{cake.price10}</p>
                </div>
            </div>
        </div>

    )
}