import CakeList from "./CakeList";
import { Carousel } from "./Carousel";
import  HomeNavbar  from "./HomeNavbar";
import {Footer} from './Footer'
function Home(props)
{
    return (
        <div>
            {/* <HomeNavbar> Hi Shubham Gupta</HomeNavbar> */}
            <Carousel />
            <CakeList />
        </div>
    )
}

export default Home