import React from 'react';
import PropTypes from 'prop-types';
import "./index.less";
import {useDispatch} from 'react-redux';
import {showSlider} from '../../../store/actions/slider';

/**
 * Description
 * @returns {any}
 */
function AlreadyUserLoginText(props) {
  const {className} = props;
  const dispatch = useDispatch();

  const showLoginSlider = () =>{
    dispatch(showSlider('LoginDrawer'));
  };
  return (
    <div className={className}>
      <span>{`Have an account?`}</span>
      <span className='login_text' onClick={showLoginSlider}>{` Login`}</span>
    </div>
  );
}

AlreadyUserLoginText.propTypes={
  className: PropTypes.string,
};

export default AlreadyUserLoginText;
