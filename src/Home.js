import { Carousel } from "./Carousel";
import  HomeNavbar  from "./HomeNavbar";

function Home(props)
{
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.",props);
    return (
        <div>
            {/* <HomeNavbar> Hi Shubham Gupta</HomeNavbar> */}
            <Carousel />
        </div>
    )
}

export default Home