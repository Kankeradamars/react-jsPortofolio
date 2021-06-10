import React from "react";
import './index.css';
import {Col,Row, Card, Button, Input, Form} from 'antd';
import{
    MailTwoTone,
    PhoneTwoTone,
    MobileOutlined,
    HeatMapOutlined,

} from '@ant-design/icons';

const Services =()=>{

    return(
<div className="services-container">
    <div className="services-content">
    <h1 >Contact</h1>
    <hr/>
<p className="contact-info"> For More Information you can Reach me on Phone or Via Email</p>
    

    
    </div>
    <Card className="contact-card">
    <MailTwoTone className="contact-icons" /> <p>Email</p> <p>musonidamars@gmail.com</p>
    <br></br>
    <PhoneTwoTone className="contact-icons" /> <p>Phone Number</p><p>+250788289680</p>
    
    <PhoneTwoTone className="contact-icons" /> <p>Location</p> <p>Kigali, Rwanda</p>
    
    </Card>

    <Card className="contact-card1">
    <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
          <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
          <Input /> 
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="Message">
        <Input.TextArea />
      </Form.Item>
          
          <Button type="primary" htmlType="submit">
          
          Submit
        </Button>
      
    </Card>

    

    
    </div>
    )
}


 export default Services;