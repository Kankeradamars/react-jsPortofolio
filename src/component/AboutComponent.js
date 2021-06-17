import React from "react";
import './index.css';
import damaa from "../assets/imagess/damaa.jpg";
import {Progress} from 'antd';
import {Col,Row, Card} from 'antd';


// import  from "../assets/imagess/";

const AboutComponent =()=>{

    return(
<Card className="About-container">
    <div className="About-content">
    <h1 >About</h1>
    <hr/>
    

    <Row>
        <Col span={8}>
      
        <img src={damaa} alt="round-image" className="small-image"/>
        </Col>
        <Col span={8}>
        <p className="aboutParagraph">I am back-end Developer, 
    I have been applying in SheCanCode cohort 3 for gaining skills 
     about different languages, During bootcamp i learned different languages such as:
     HTML,CSS,Node js, Javascripts and React js. 
      I am a self- motivated and self-taught professional who likes to solve problems.
     
    </p>
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
    <p>JAVASCRIPT</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#118ee9'}}  percent={80} status= "active" />
    <p>CSS</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108ee9'}} percent={65} status= "active" /> 
    </>,
    </div>
    <div className="column1">
    <h2 className="frontckend">Frontend Development</h2>
    <>
    <p>Node js</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#118ee9'}} percent={80} status= "active" />
    <p>React js</p><Progress  strokeColor={{'0':'#108ee9', '100%':'#108eff9'}}  percent={80}status= "active" /> 
    </>,
    </div>
    </div>
    


<div >
    <h1 >Resume</h1>
    <hr/>
    <p className="noteResume">I am back-end Developer,
    I am a self- motivated, and I really like coding, 
    I have a dream of being Full Stack Developer. 
    This push me to do many practices as much as possible. 
    </p>

    <div className="columnOnSummary">
    
        <Card className="resume-card1">
       <h2>Summary</h2> 
       <h3>Damars Kankera</h3>
       <p>I'm Hard working, I have bachelor degree in FST and I'm backend 
           developer, I really like it.
       </p>
            <ul>
                <li>Kigali, Rwanda</li>
                <li>+250788289680</li>
                <li>musonidamars@gmail.com</li>
            </ul>
            <h2>Education</h2>
            <h3>Bachelors in Food Science Technology</h3>
            <p className="resume-card2019">2016-2020</p>
            <h3>SheCanCode BootCamp <p className="resume-card2019">24/Feb-18/June/2021</p></h3>

            </Card>

            <Card className="resume-card">
                
           <h2>Professional Experience</h2> 
           <h3>Lab Technician</h3>
           <h4>Inyange Industry</h4>
           <p className="resume-card2019">2019</p>
           <ul>
               <li>Work on products and ingredients to manufacture food. </li>
                 <li>Clean, maintain, operate, and sanitize laboratory equipment
                 such as microscopes and petri dishes.</li>   
                <li>Use mathematical and chemical procedures to find percentages of ingredients and formulas. 
                   Record or compile test results or prepare graphs, charts, or reports.</li> 
           </ul>
            </Card>
            
    </div>
    </div>
<br></br>
    <div>
        <h1>Projects</h1>
        <hr></hr>
        <ul>
            <p> I have working on many projects like:</p>
            <li>  Search Engine,</li>  
            <li>Blog post,</li>
                <li> Personal Portofolio,</li> 
            <li>Website about e-commerce platfoam called Real Job Opportunity,</li>
            <li>Todo-List App</li>
            </ul>
    
    <Card className="port">
        
    </Card>
    <br></br>
    <Card className="port1">
        
    </Card>

    </div>

    </div>
    </div>
    </Card>

        
       
    )
}

export default AboutComponent;