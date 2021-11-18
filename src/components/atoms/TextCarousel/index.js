import {Carousel} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Description
 * @param {any} props
 * @returns {any}
 */
function TextCarousel(props) {
  const {texts} = props;
  return (
    <Carousel autoplay {...props}>
      {texts.map((cur, index)=>(
        <div key={index}>{cur.text}</div>
      ))}
    </Carousel>
  );
}

TextCarousel.propTypes ={
  texts: PropTypes.arrayOf(PropTypes.object),
};

export default TextCarousel;
