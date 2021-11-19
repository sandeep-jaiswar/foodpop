import {Button, Input} from 'antd';
import React from 'react';
import "./index.less";

/**
 * Description
 * @returns {any}
 */
function SignupForm() {
  return (
    <div className='signup_form'>
      <div className='input_div'>
        <div className='label'>Phone</div>
        <Input className='input' prefix="+91" />
      </div>
      <div className='input_div'>
        <div className='label'>Email</div>
        <Input className='input' />
      </div>
      <div className='input_div'>
        <div className='label'>Password</div>
        <Input className='input' />
      </div>
      <div className='input_div'>
        <div className='label'>Reconfirm Password</div>
        <Input className='input' />
      </div>
      <Button size="large" shape="round" className='signin_btn' type="default">Sign Up</Button>
    </div>
  );
}

export default SignupForm;
