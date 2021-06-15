import React from 'react';
import MainLayout from '../component/MainLayout';
import Header from '../component/Header';
import HomeComponent from "../component/HomeComponent";
import AboutComponent from "../component/AboutComponent";
import WorkingExperience from '../component/WorkingExperience';
import Services from "../component/services";


const Home=()=>{
    return(
<MainLayout>

<HomeComponent/>
<AboutComponent></AboutComponent>
<WorkingExperience></WorkingExperience>
<Services></Services>

</MainLayout>
    )
}

export default Home;