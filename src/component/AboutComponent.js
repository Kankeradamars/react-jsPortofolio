import React from "react";
import './index.css';
import damaa from "../assets/imagess/damaa.jpg";
import {Progress} from 'antd';
import {Col,Row} from 'antd';

// import  from "../assets/imagess/";

const AboutComponent =()=>{

    return(
<div className="About-container">
    <div className="About-content">
    <h1 >About</h1>
    <hr/>
    <p className="aboutParagraph">I am back-end Developer, 
    have been applying in SheCanCode cohort 3 for gaining skills 
     about different langauge, now i know HTML,CSS,Node js, Javascripts and React. 
      I am a self- motivated and self-taught professional who likes to solve problems.
       I merge a passion for usability and 
       user experience with technical knowledge to create cool digital experiences.
    </p>

    <img src={damaa} alt="round-image" className="small-image"/>
        
    <p className="full">UI/UX Designer & Fullstack Developer.</p>

    <p className="nameAbout"> >Name:Kankera Damars</p>
    <p className="email">email:musonidamars@gmail.com</p>
    <p className="tel">tel:+250788289680</p>
    <p className="city">Rwanda/ Kigali City</p>
    <p className="freelance">>Freelance: Am available</p>


<div>
    <h1 className="skill">Skills</h1>

    <div className="rowSkills">
        <div className="column1">
        <h1 className="backend">Backend Development</h1>
            <>
    <p>HTML</p><Progress   strokeColor={{'0':'#108ee9', '100%':'#108ee9'}}  percent={100} status= "active" />
    <p>JAVASCRIPT</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}}  percent={80} status= "active" />
    <p>CSS</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}} percent={65} status= "active" /> 
    </>,
    </div>
    <div className="column1">
    <h1 className="frontckend">Frontend Development</h1>
    <>
    <p>Node js</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}} percent={80} status= "active" />
    <p>React js</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}}  percent={80}status= "active" /> 
    </>,
    </div>
    </div>
    


<div >
    <h1 className="resume">Resume</h1>
    <p className="noteResume">I am back-end Developer,
    I am a self- motivated and self-taught professional who likes to solve problems.
       I merge a passion for usability and 
       user experience with technical knowledge to create cool digital experiences.  
    </p>

    <div className="resumeSummary">
       <h2>Summary</h2> 
       <h3>Damars Kankera</h3>
       <p>Innovative and deadline-driven Graphic Designer with 3+ years of
            experience designing and developing user-centered digital/print
            marketing material from initial concept to final, polished deliverable.</p>
            <ul>
                <li>Kigali, Rwanda</li>
                <li>+250788289680</li>
                <li></li>
            </ul>
            <p></p>
            <p></p>
            <p>musonidamars@gmail.com</p>
            <h2>Education</h2>
            <h3>Bachelors in Food Science Technology</h3>
            
    </div>
    </div>

    <div className="Working-container">
<div className="working">Working-Experience</div>

    <p className="WorkingParagraph"><h3 className="WorkingParagraphH1">Rwanda Haza Tech Ltd</h3>
    Rwanda Haza Tech Ltd is tech company founded in 2017 and officially 
     launched in 2018 by group of seven young people with 
     intentions to make people's and their lives much better using technology,
      is a business line in the areas of Information Technology, Communication, 
      IT Security, Multimedia and Cyber security.
</p> 


        </div>

    </div>
    </div>
    </div>

        
       
    )
}

export default AboutComponent;