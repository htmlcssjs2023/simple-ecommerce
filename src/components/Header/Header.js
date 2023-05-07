import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <a href="/shop">Order</a>
            <a href="/orders">Order Review</a>
            <a href="/inventory">Manage Inventroy</a>
            <a href="/about">Login</a>
        </div>
    </nav>
  )
}

export default Header