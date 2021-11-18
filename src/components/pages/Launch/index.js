import React from "react";
import SetupLocation from "../../atoms/SetupLocation";
import AlreadyUserLoginText from "../../molecules/AlreadyUserLoginText";
import ImageCarousel from "../../molecules/ImageCarousel";
import "./index.less";
/**
 * Description
 * @return {any}
 */
function LaunchPage() {
  const images = [
    {
      priority: 0,
      src: "https://foodpop.s3.us-east-2.amazonaws.com/images/favouriteRestaurants.png",
      desc: `Order from top & favourite restaurants`,
    },
    {
      priority: 1,
      src: "https://foodpop.s3.us-east-2.amazonaws.com/images/wideCollection_oksunf.png",
      desc: `with a wide collection of cuisines`,
    },
    {
      priority: 2,
      src: "https://foodpop.s3.us-east-2.amazonaws.com/images/deliveredQuickly.png",
      desc: `delivered quickly to your doorstep`,
    },
  ];

  return (
    <div className={"launch_page"}>
      <ImageCarousel images={images} />
      <div
        className={"jumpin_text"}
      >{`Ready to see top restaurants to order?`}</div>
      <SetupLocation className={"setuplocation"} />
      <AlreadyUserLoginText className={`alreadyUserLoginText`} />
    </div>
  );
}

export default LaunchPage;
