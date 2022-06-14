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
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      desc: `Order from top & favourite restaurants`,
    },
    {
      priority: 1,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      desc: `with a wide collection of cuisines`,
    },
    {
      priority: 2,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      desc: `delivered quickly to your doorstep`,
    },
  ];

  return (
    <div className={"launch_page"}>
      <ImageCarousel styles={{height: '50vh', width: '100vw'}} images={images} />
      <div
        className={"jumpin_text"}
      >{`Ready to see top restaurants to order?`}</div>
      <SetupLocation className={"setuplocation"} />
      <AlreadyUserLoginText className={`alreadyUserLoginText`} />
    </div>
  );
}

export default LaunchPage;
