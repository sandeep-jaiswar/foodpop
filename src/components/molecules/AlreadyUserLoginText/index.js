import React from 'react';
import PropTypes from 'prop-types';
import "./index.less";

/**
 * Description
 * @returns {any}
 */
function AlreadyUserLoginText(props) {
  const {className} = props;
  return (
    <div className={className}>
      <span>{`Have an account?`}</span>
      <span className='login_text'>{` Login`}</span>
    </div>
  );
}

AlreadyUserLoginText.propTypes={
  className: PropTypes.string,
};

export default AlreadyUserLoginText;
