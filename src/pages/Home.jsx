import Pricing from "../component/Pricing";
import Slider from "../component/Slider/Slider";


const Home = () => {
    return (
        <div className="min-h-screen">
        <Slider></Slider>
        <Pricing></Pricing>
        {/* <About></About> */}
        {/* <Services></Services> */}
    </div>
    );
};

export default Home;