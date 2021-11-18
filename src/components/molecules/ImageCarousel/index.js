import React from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'antd';
import ResponsiveImage from '../../atoms/Image';
/**
 * ImageCarousel
 * @return {any}
 */
function ImageCarousel(props) {
  const {images} = props;
  return (
    <Carousel autoplay>
      {images.map((cur)=>(
        <ResponsiveImage key={cur.priority} {...cur}>
        </ResponsiveImage>
      ))}
    </Carousel>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageCarousel;
