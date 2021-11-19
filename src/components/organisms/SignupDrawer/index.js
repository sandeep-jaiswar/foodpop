import {Drawer} from 'antd';
import React from 'react';
import {useDispatch} from 'react-redux';
import {hideSlider} from '../../../store/actions/slider';
import {
  LeftOutlined,
} from '@ant-design/icons';
import "./index.less";
import LogoWithText from '../../atoms/LogoWithText';
import SignupForm from '../../molecules/SignupForm';

/**
 * Description
 * @returns {any}
 */
function SignupDrawer() {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(hideSlider('SignupDrawer'));
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
        <SignupForm/>
      </div>
    </Drawer>
  );
}

export default SignupDrawer;
