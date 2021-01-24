import React from 'react';
import './TopNavBar.css';

const TopNavBar = (): JSX.Element => {
  return (
    <div className="nav_container">
      <div className="LogoContainer">
        <img src='https://www.satispay.com/static/cae293864facda3ae686eec7b189703f/d5be0/logo.png' className="App-logo" alt="logo" />
      </div>
    </div>
  );
};

export default TopNavBar;