
import AllBusiness from "../component/AllBusiness";
import Pricing from "../component/Pricing";
import Slider from "../component/Slider/Slider";
import TabCategory from "../component/TabCategory";


const Home = () => {
   
    return (
        <div className="min-h-screen">
        <Slider></Slider>
        <TabCategory></TabCategory>
        <AllBusiness></AllBusiness>
        <Pricing></Pricing>

        {/* <About></About> */}
        {/* <Services></Services> */}
    </div>
    );
};

export default Home;