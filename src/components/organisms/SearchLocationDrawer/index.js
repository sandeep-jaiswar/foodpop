import React, {useEffect, useState} from 'react';
import {Drawer} from 'antd';
import {useDispatch} from 'react-redux';
import {hideSlider} from '../../../store/actions/slider';
import {
  LeftOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import "./index.less";
import InputLocation from '../../atoms/InputLocation';

/**
 * Description
 * @returns {any}
 */
function SearchLocationDrawer() {
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  useEffect(()=>{
    console.log(results);
  }, [results]);

  const onClose = () => {
    dispatch(hideSlider());
  };

  const drawerProps = {
    width: "100vw",
    placement: "right",
    onClose: onClose,
    visible: true,
    closable: false,
  };

  return (
    <>
      <Drawer {...drawerProps}>
        <div className='rightDrawer'>
          <div className={`header`}>
            <div className='back_icon' onClick={onClose}><LeftOutlined /></div>
            <InputLocation setResults={setResults}/>
            <div className='search_icon'><SearchOutlined /></div>
          </div>
          <div className='divider' ></div>
        </div>
      </Drawer>
    </>
  );
}

export default SearchLocationDrawer;
