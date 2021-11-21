import React from "react";
import HeroTag from "../../atoms/HeroTag";
import {Image} from "antd";
import "./index.less";
import MobileHeader from "../../atoms/MobileHeader";
import PopBreadcrum from "../../atoms/PopBreadcrum";
import Popular from "../../molecules/Popular";

/**
 * Description
 * @param {any} props
 * @returns {any}
 */
function Home(props) {
  const restaurantsArr = [
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
    {
      name: "E",
      url: "https://foodpop.s3.us-east-2.amazonaws.com/images/1.jpg",
    },
  ];
  const catgeories = ["All", "Starters", "Lunch", "Dinner"];
  return (
    <div className="home_page">
      <MobileHeader />
      <PopBreadcrum />
      {catgeories.map((cur) => (
        <Popular key={cur} type={cur} />
      ))}
      <HeroTag title="Restaurants Nearby" />
      <div className="restaurant_cards">
        {restaurantsArr.map((cur) => (
          <Image src={cur.url} key={cur.url} width="30vw" height="30vw" preview={false} />
        ))}
      </div>
      <HeroTag title="Restaurants Nearby" />
      <div className="restaurant_cards">
        {restaurantsArr.map((cur) => (
          <Image src={cur.url} key={cur.url} width="30vw" height="30vw" preview={false} />
        ))}
      </div>
    </div>
  );
}

export default Home;
