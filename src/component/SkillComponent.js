import React from  'react';
import {Link } from 'react-router-dom';
import {Col,Row, Card} from 'antd';
import {Progress} from 'antd';

const Skills=()=>{
    return(
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
    
</div>

    );
};

export default Skills;