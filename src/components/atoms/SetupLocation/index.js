import {Button} from 'antd';
import React from 'react';
import PropTypes from "prop-types";
import "./index.less";
import {useDispatch} from 'react-redux';
import {showSlider} from '../../../store/actions/slider';

/**
 * Description
 * @returns {any}
 */
function SetupLocation(props) {
  const dispatch = useDispatch();
  const fetchLocation = () =>{
    dispatch(showSlider('SearchLocationDrawer'));
  };
  const {className} = props;
  return (
    <Button className={className} onClick={fetchLocation} type="primary">
      <div>{`SETUP YOUR LOCATION`}</div>
    </Button>
  );
}

SetupLocation.propTypes ={
  className: PropTypes.string,
};

export default SetupLocation;

