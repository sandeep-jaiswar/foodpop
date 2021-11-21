import {Form, Button, Input} from 'antd';
import React from 'react';
import {useNavigate} from 'react-router';
import API from '../../../services/api/provider';
import {emailRegex, passwordRegex, phoneRegex} from '../../../utils/Regex';
import "./index.less";

/**
 * Description
 * @returns {any}
 */
function SignupForm() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
    API.post("http://localhost:4000/api/user", values).then(()=>{
      navigate('/home');
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="signup_form"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className='signup_form'>
        <Form.Item
          label="Phone"
          name="Phone"
          className="label"
          rules={[
            {
              required: true,
              message: 'Please input your phone',
            },
            {
              message: 'Please input a valid phone number',
              pattern: phoneRegex,
              max: 10,
              len: 10,
              min: 10,
            },
          ]}
        >
          <div className='input_div'>
            <Input className='input' prefix="+91" />
          </div>
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          className='label'
          rules={[
            {
              required: false,
              message: 'Please input your email',
            },
            {
              message: 'Please input a valid email address',
              pattern: emailRegex,
            },
          ]}
        >
          <div className='input_div'>
            <Input className='input' />
          </div>
        </Form.Item>
        <Form.Item
          label="Password"
          name="Password"
          className='label'
          tooltip={`Password should contain at least one digit(0-9),at least one lowercase letter(a-z),at least one uppercase letter(A-Z),at least one special character ( @, #, %, &, !, $)`}
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
            {
              message: 'Please input a valid password',
              pattern: passwordRegex,
            },
          ]}
        >
          <div className='input_div'>
            <Input className='input' />
          </div>
        </Form.Item>
        <Form.Item
          label="Reconfirm Password"
          name="Reconfirm Password"
          className='label'
          rules={[
            {
              required: true,
              message: 'Please reconfirm your password',
            },
          ]}
        >
          <div className='input_div'>
            <Input className='input' />
          </div>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Button size="large" htmlType="submit" shape="round" className='signin_btn' type="default">Sign Up</Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default SignupForm;
