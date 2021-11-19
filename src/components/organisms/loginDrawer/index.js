import {Drawer} from 'antd';
import React from 'react';
import {useDispatch} from 'react-redux';
import {hideSlider} from '../../../store/actions/slider';
import {
  LeftOutlined,
} from '@ant-design/icons';
import "./index.less";
import LogoWithText from '../../atoms/LogoWithText';
import ImageCarousel from '../../molecules/ImageCarousel';
import SignInForm from '../../molecules/SignInForm';

/**
 * Description
 * @returns {any}
 */
function LoginDrawer() {
  const dispatch = useDispatch();
  const images = [
    {
      priority: 2,
      src: "https://foodpop.s3.us-east-2.amazonaws.com/images/prawns.jpg",
      className: 'foodimg',
    },
    {
      priority: 0,
      src: "https://foodpop.s3.us-east-2.amazonaws.com/images/pizza.jpg",
      className: 'foodimg',
    },
    {
      priority: 1,
      src: "https://foodpop.s3.us-east-2.amazonaws.com/images/chinese.jpg",
      className: 'foodimg',
    },
  ];

  const onClose = () => {
    dispatch(hideSlider("LoginDrawer"));
  };

  const drawerProps = {
    width: "100vw",
    placement: "right",
    onClose: onClose,
    visible: true,
    closable: false,
  };

  return (
    <Drawer {...drawerProps}>
      <div className='login_drawer'>
        <div className={`header`}>
          <div className='back_icon' onClick={onClose}><LeftOutlined /></div>
          <LogoWithText />
        </div>
        <div className="img-box">
          <ImageCarousel dots={false} images={images} />
        </div>
        <SignInForm/>
      </div>
    </Drawer>
  );
}

export default LoginDrawer;
