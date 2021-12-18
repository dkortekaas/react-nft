import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import switchIcon from "../assets/header/theme-switch.png";

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={punkLogo} alt='' className='logo' />
      </div>
      <div className='header__search'>
        <div className='icon'>
          <img src={searchIcon} alt='' className='icon__search' />
        </div>
        <input
          type='text'
          className='search'
          placeholder='Collection, item or user     ...'
        />
      </div>
      <div className='header__items'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className='header__actions'>
        <div className='switch'>
          <img src={switchIcon} alt='' className='switch__icon' />
        </div>
      </div>
      <div className='header__login'>GET IN</div>
    </div>
  );
}

export default Header;
