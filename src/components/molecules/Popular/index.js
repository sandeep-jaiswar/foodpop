import {Card} from "antd";
import React from "react";
import PropTypes from 'prop-types';
import "./index.less";

/**
 * Description
 * @param {any} props
 * @returns {any}
 */
function Popular(props) {
  const {type} = props;
  const items = [
    {
      name: "A",
      url: "https://foodpop.s3.us-east-2.amazonaws.com/images/1.jpg",
    },
    {
      name: "B",
      url: "https://foodpop.s3.us-east-2.amazonaws.com/images/1.jpg",
    },
    {
      name: "C",
      url: "https://foodpop.s3.us-east-2.amazonaws.com/images/1.jpg",
    },
    {
      name: "D",
      url: "https://foodpop.s3.us-east-2.amazonaws.com/images/1.jpg",
    },
  ];
  return (
    <div className="popular">
      <div className='popular_head'>
        <div className='head1'>{`Popular ${type}`}</div>
        <div className='head2'>See All</div>
      </div>
      <div className="popular_cards">
        {items.map((cur) => (
          <Card className='card' bodyStyle={{width: `42vw`, height: `42vw`, borderRadius: `2rem`, border: `1px solid`}} key={cur.name}>
            <div className="img">
              {cur.name}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

Popular.propTypes ={
  type: PropTypes.string,
};

export default Popular;
