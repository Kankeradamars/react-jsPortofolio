import React from 'react';
import {Col,Row, Card} from 'antd';

const Resume=()=>{
    return(
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
    )
}

export default Resume;