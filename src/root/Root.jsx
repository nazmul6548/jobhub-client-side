// import Navbar from "../component/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { motion, useScroll } from "framer-motion"

const Root = () => {
    const { scrollYProgress } =useScroll();
    return (
        <div className="">
            <motion.div
            style={{
                scaleX:scrollYProgress,
                position :"fixed",
                top:0,
                left:0,
                right:0,
                height:10,
                background:"purple",
                transformOrigin:"0%",
                zIndex: 100,

                

            }}
        />
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    );
};

export default Root;