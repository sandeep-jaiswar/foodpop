import {Image} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Description
 * @param {any} props
 * @return {any}
 */
function ResponsiveImage(props) {
  const {children} = props;
  return (
    <Image {...props}>
      {children}
    </Image>
  );
}

ResponsiveImage.propTypes = {
  children: PropTypes.any,
};

export default ResponsiveImage;
