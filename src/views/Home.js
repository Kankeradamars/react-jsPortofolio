import React from 'react';
import MainLayout from '../component/MainLayout';
import Header from '../component/Header';
import HomeComponent from "../component/HomeComponent";
import AboutComponent from "../component/AboutComponent";

const Home=()=>{
    return(
<MainLayout>

<HomeComponent/>
<AboutComponent></AboutComponent>

</MainLayout>
    )
}

export default Home;