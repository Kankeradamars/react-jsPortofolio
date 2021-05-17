import React from "react";
import './index.css';
import {Col,Row} from 'antd';


const AboutComponent =()=>{

    return(
        <div className="Working-container">
<div className="working">Working-Experience</div>
    <p className="WorkingParagraph"><h1>Rwanda Haza Tech Ltd</h1>
     is tech company founded in 2017 and officially 
     launched in 2018 by group of seven young people with 
     intentions to make people's and their lives much better using technology,
      is a business line in the areas of Information Technology, Communication, 
      IT Security, Multimedia and Cyber security.
</p> "grid"

<Row>
<Col span ={8}><h1>Working-Experience</h1>
    is tech company founded in 2017 and officially 
     launched in 2018 by group of seven young people with 
     intentions to make people's and their lives much better using technology,
      is a business line in the areas of Information Technology, Communication, 
      IT Security, Multimedia and Cyber security.</Col>

      <Col span ={8}>nd their lives much better using technology,
      is a business line in the areas of Information Technology, Communication, 
      IT Security, Multimedia and Cyber security.</Col>
      </Row>
        </div>

    );
}