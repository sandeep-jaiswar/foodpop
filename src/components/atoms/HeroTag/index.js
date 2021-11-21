import React from 'react';
import PropTypes from 'prop-types';
import "./index.less";

/**
 * Description
 * @param {any} {title}
 * @returns {any}
 */
function HeroTag({title}) {
  return (
    <div className='hero_tag'>
      {title}
    </div>
  );
}
HeroTag.propTypes ={
  title: PropTypes.string,
};

export default HeroTag;
