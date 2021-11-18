import React from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'antd';
import ResponsiveImage from '../../atoms/Image';
import "./index.less";
/**
 * ImageCarousel
 * @return {any}
 */
function ImageCarousel(props) {
  const {images} = props;
  return (
    <Carousel autoplay>
      {images.map((cur)=>(
        <React.Fragment key={cur.desc}>
          <ResponsiveImage {...cur}>
          </ResponsiveImage>
          {cur.desc && <div className='desc'>{cur.desc}</div>}
        </React.Fragment>
      ))}
    </Carousel>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageCarousel;
