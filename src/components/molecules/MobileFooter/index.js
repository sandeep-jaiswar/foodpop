import {HomeFilled, HomeOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import "./index.less";
/**
 * Description
 * @returns {any}
 */
function MobileFooter() {
  const none = {
    home: false,
    search: false,
    cart: false,
    account: false,
  };
  const navigate = useNavigate();
  const cur = window.location.pathname.split('/')[1];
  const [state, setState] = useState({...none, [cur]: true});
  const {home, search, cart, account} = state;
  const clickHandler = (cur) =>{
    setState({...none, [cur]: true});
    navigate(`/${cur}`);
  };
  return (
    <div className='mobile_footer'>
      <div className={`icon ${home ? 'active' : ''}`} onClick={()=>clickHandler('home')}>
        <span className='footer_icon'>{home?<HomeFilled /> : <HomeOutlined />}</span>
        {home && <span className='footer_text'>Home</span>}
      </div>
      <div className={`icon ${ search ? 'active' : ''}`} onClick={()=>clickHandler('search')}>
        <span className='footer_icon'>{search? <SearchOutlined />:<SearchOutlined />}</span>
        {search && <span className='footer_text'>Search</span>}
      </div>
      <div className={`icon ${cart ? 'active' : ''}`} onClick={()=>clickHandler('cart')}>
        <span className='footer_icon'>{cart? <ShoppingCartOutlined />:<ShoppingCartOutlined />}</span>
        {cart && <span className='footer_text'>Cart</span>}
      </div>
      <div className={`icon ${ account ? 'active' : ''}`} onClick={()=>clickHandler('account')}>
        <span className='footer_icon'>{account? <UserOutlined /> : <UserOutlined />}</span>
        {account && <span className='footer_text'>Account</span>}
      </div>
    </div>
  );
}

export default MobileFooter;
