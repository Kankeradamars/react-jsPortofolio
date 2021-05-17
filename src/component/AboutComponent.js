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

    <Row>
        <Col span={8}>
        <img src={damaa} alt="round-image" className="small-image"/>
        </Col>
        <Col span={8}>
        <p className="full">UI/UX Designer & Fullstack Developer.</p>
        <ul >
    <li>Name:Kankera Damars</li>
    <li>email:musonidamars@gmail.com</li>
    <li>tel:+250788289680</li>
    <li>Rwanda/ Kigali City</li>
<li>Freelance: Am available</li>
</ul>
        </Col>
    </Row>
    
    
    
    
    
    
    
    

<div>
    <h1>Skills</h1>
    <hr/>

    <div className="rowSkills">
        <div className="column1">
        <h2 className="backend">Backend Development</h2>
            <>
    <p>HTML</p><Progress   strokeColor={{'0':'#108ee9', '100%':'#108ee9'}}  percent={100} status= "active" />
    <p>JAVASCRIPT</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}}  percent={80} status= "active" />
    <p>CSS</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}} percent={65} status= "active" /> 
    </>,
    </div>
    <div className="column1">
    <h2 className="frontckend">Frontend Development</h2>
    <>
    <p>Node js</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}} percent={80} status= "active" />
    <p>React js</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}}  percent={80}status= "active" /> 
    </>,
    </div>
    </div>
    


<div >
    <h1 >Resume</h1>
    <hr/>
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
                <li>musonidamars@gmail.com</li>
            </ul>

           
            <h2>Education</h2>
            <h3>Bachelors in Food Science Technology</h3>
            
    </div>
    </div>

    <div className="Working-container">
<h1 >Working-Experience</h1>
<hr/>

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