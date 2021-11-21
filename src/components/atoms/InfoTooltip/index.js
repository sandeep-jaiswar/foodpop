import {Tooltip} from 'antd';
import React from 'react';

/**
 * Description
 * @param {any} props
 * @returns {any}
 */
function index(props) {
  const {title}= props;
  return (
    <Tooltip title={title}>

    </Tooltip>
  );
}

export default index;
