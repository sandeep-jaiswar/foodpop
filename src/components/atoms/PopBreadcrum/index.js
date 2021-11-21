import React from 'react';
import "./index.less";
import PropTypes from 'prop-types';

/**
 * Description
 * @returns {any}
 */
function PopBreadcrum(props) {
  const {type} = props;
  return (
    <div className='home_header'>
      {type}
    </div>
  );
}

PopBreadcrum.propTypes = {
  type: PropTypes.string,
};

export default PopBreadcrum;
