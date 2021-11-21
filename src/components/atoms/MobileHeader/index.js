import React from "react";
import LocationBar from "../LocationBar";
import "./index.less";

/**
 * Description
 * @returns {any}
 */
function MobileHeader() {
  return (
    <div className="mobile_header">
      <LocationBar/>
    </div>
  );
}

export default MobileHeader;
