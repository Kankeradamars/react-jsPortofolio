import React from "react";
import './index.css';
import {Card} from 'antd';
// import Typewriter from 'typewriter-effect';

// import pexel from "../assets/imagess/pexel.jpg";

const HomeComponent =()=>{

    return(
<Card className="Home-container">

    {/* <img src={pexel} alt="home-image" className="home-image"/> */}
    <div className="home-content">Damars Kankera

    <marquee width="100%" direction="left" height="100px">
    I'm back-end Developer
    </marquee>
    
    </div>
    
   
    
    
</Card>
    )
}





export default HomeComponent;


