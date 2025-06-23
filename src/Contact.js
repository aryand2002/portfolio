<<<<<<< HEAD
import React from "react";
import { Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";

function Contact() {
  return (
    <div className="min-h-screen bg-[#1d1a2b] flex justify-center items-center py-16 px-4" id="contact">
      <div className="w-full max-w-md bg-[#29253d] rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Contact Me
        </h2>
        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={(values) => {
            console.log("Form Submitted:", values);
          }}
        >
          <Form.Item
            label={<span className="text-white font-semibold">Username</span>}
            name="name"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input
              placeholder="Enter your username"
              className="
                bg-gray-100 
                border border-gray-300 
                rounded-md 
                text-black 
                placeholder-gray-500 
                focus:border-indigo-500 
                focus:ring 
                focus:ring-indigo-300 
                focus:ring-opacity-50 
                caret-black 
                selection:bg-indigo-600 
                selection:text-white
              "
            />
        </Form.Item>

          <Form.Item
            label={<span className="text-white font-semibold">Mobile</span>}
            name="mobile"
            rules={[
              { required: true, message: "Please enter your mobile number" },
              { pattern: /^[0-9]+$/, message: "Only numbers allowed" },
            ]}
          >
            <Input
              placeholder="Enter your mobile number"
              maxLength={15}
              className="
                bg-gray-100 
                border border-gray-300 
                rounded-md 
                text-black 
                placeholder-gray-500 
                focus:border-indigo-500 
                focus:ring 
                focus:ring-indigo-300 
                focus:ring-opacity-50 
                caret-black 
                selection:bg-indigo-600 
                selection:text-white
              "
            />
        </Form.Item>

          <Form.Item
            label={<span className="text-white font-semibold">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              className="
                bg-gray-100 
                border border-gray-300 
                rounded-md 
                text-black 
                placeholder-gray-500 
                focus:border-indigo-500 
                focus:ring 
                focus:ring-indigo-300 
                focus:ring-opacity-50 
                caret-black 
                selection:bg-indigo-600 
                selection:text-white
              "
            />
        </Form.Item>

          <Form.Item
            label={<span className="text-white font-semibold">Message</span>}
            name="message"
            rules={[
              { required: true, message: "Please enter your message" },
              { min: 10, message: "Message must be at least 10 characters" },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Write your message here"
              className="
                bg-gray-100 
                border border-gray-300 
                rounded-md 
                text-black 
                placeholder-gray-500 
                focus:border-indigo-500 
                focus:ring 
                focus:ring-indigo-300 
                focus:ring-opacity-50 
                resize-none
                caret-black 
                selection:bg-indigo-600 
                selection:text-white
              "
            />
        </Form.Item>
        
          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors duration-300"
              size="large"
              type="primary"
            >
              Submit
            </Button>
          </Form.Item>
      </Form>
      </div>
    </div>
  );
}

export default Contact;
=======
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
>>>>>>> 64ed7a1abf1b5cbe73fe4b7c8a747ddeb91f09d4
