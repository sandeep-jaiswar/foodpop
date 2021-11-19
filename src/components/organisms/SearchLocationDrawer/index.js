import React, {useEffect, useState} from 'react';
import {Card, Drawer} from 'antd';
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
    console.log(results?.features, 'results');
  }, [results]);

  const onClose = () => {
    dispatch(hideSlider("SearchLocationDrawer"));
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
          {results?.features && results.features.length > 0 && results.features.map((cur, index)=>(
            <Card key={index}>{cur.properties.display_name}</Card>
          ))}
        </div>
      </Drawer>
    </>
  );
}

export default SearchLocationDrawer;
