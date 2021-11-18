import {Button} from 'antd';
import React from 'react';
import PropTypes from "prop-types";
import "./index.less";

/**
 * Description
 * @returns {any}
 */
function SetupLocation(props) {
  const {className} = props;
  return (
    <Button className={className} type="primary">
      <div>{`SETUP YOUR LOCATION`}</div>
    </Button>
  );
}

SetupLocation.propTypes ={
  className: PropTypes.string,
};

export default SetupLocation;

