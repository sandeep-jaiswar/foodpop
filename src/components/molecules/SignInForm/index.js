import {Button, Input} from 'antd';
import React from 'react';
import {useDispatch} from 'react-redux';
import {showSlider} from '../../../store/actions/slider';
import "./index.less";

/**
 * Description
 * @returns {any}
 */
function SignInForm() {
  const dispatch = useDispatch();
  const showSignup = () =>{
    dispatch(showSlider('SignupDrawer'));
  };
  return (
    <div className='signin_form'>
      <div className='input_div'>
        <div className='label'>Phone</div>
        <Input className='input' prefix="+91" />
      </div>
      <div className='input_div'>
        <div className='label pass_input'>Password</div>
        <Input className='input' />
      </div>
      <div className='forgot_label'>
        <span>{`Forgot Password ?`}</span>
      </div>
      <Button size="large" shape="round" className='signin_btn' type="default">Sign In</Button>
      <div onClick={showSignup} className='label newuser_text'>New User ?</div>
    </div>
  );
}

export default SignInForm;
