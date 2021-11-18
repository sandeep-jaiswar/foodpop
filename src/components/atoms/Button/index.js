import {Button} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Description
 * @param {any} props
 * @returns {any}
 */
function FpButton(props) {
  const {children} = props;
  return (
    <Button {...props}>
      {children}
    </Button>
  );
}

FpButton.propTypes = {
  children: PropTypes.any,
};


export default FpButton;
