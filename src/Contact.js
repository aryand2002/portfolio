import React from 'react'
import {Form, Input,Button} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import './Contact.css'


function Contact() {
  return (
    <div className="container5">
      <div className='myForm' >
      <Form >
        <Form.Item   label={<label style={{ color: "white" }}>Username</label>} name="name" >
        <Input />
        </Form.Item>

        <Form.Item label={<label style={{ color: "white" }}>Mobile</label>} name="mobile">
        <Input />
        </Form.Item>

        <Form.Item label={<label style={{ color: "white" }}>Email</label>} name="email">
        <Input type="number" />
        </Form.Item>

        <Form.Item label={<label style={{ color: "white" }}>Message</label>} name="message">
        <TextArea />
        </Form.Item>  
        <Form.Item>
        <Button htmlType='submit' >Submit</Button>
        </Form.Item>
        
        

      </Form>
      </div>
      
    </div>
  )
}

export default Contact