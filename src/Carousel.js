var carousel1 = "cr1.webp";
var carousel2 = "cr2.webp";
var carousel3 = "cr3.webp";
var carousel4 = "cr4.webp";

export function Carousel(){
    let carouselImage = { "height" : "300px", "width" : "100px"};
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            <div className="carousel-inner" id="carousel-slider">
                <div className="carousel-item active">
                    <img style={carouselImage} src={carousel1} className="d-block w-100" alt="Cake Online" />
                </div>
                <div className="carousel-item">
                    <img style={carouselImage} src={carousel2} className="d-block w-100" alt="Cake Online" />
                </div>
                <div className="carousel-item">
                    <img style={carouselImage} src={carousel3} className="d-block w-100" alt="Cake Online" />
                </div>
                <div className="carousel-item">
                    <img style={carouselImage} src={carousel4} className="d-block w-100" alt="Cake Online" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}