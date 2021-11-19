import {Image} from 'antd';
import React from 'react';
import Logo from "../../../assets/svgs/logo.svg";
import "./index.less";


/**
 * Description
 * @returns {any}
 */
function LogoWithText() {
  const companyName = 'foodpop';
  return (
    <div className='logowithtext'>
      <div className='logo'>
        <Image preview={false} className='logo_img' src={Logo} />
      </div>
      <div className='text'>{companyName}</div>
    </div>
  );
}

export default LogoWithText;
