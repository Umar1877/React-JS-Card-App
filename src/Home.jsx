import React from "react";
import web from "../src/images/img2.jpg"
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common Common name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started"   />
        </>
    );
};

export default Home;
