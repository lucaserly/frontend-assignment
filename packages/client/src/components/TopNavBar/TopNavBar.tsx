import React from 'react';
import './TopNavBar.css';

const TopNavBar = (): JSX.Element => {
  return (
    <div className="nav_container">
      <div className="LogoContainer">
        <img src='https://gallery-cdn.breezy.hr/c94cc0f0-7bdb-46cb-86e4-46eec14ed835/1212443Tavola%20disegno%201-100.jpg' className="App-logo" alt="logo" style={{ height: '100%', width: '20%' }} />
      </div>
    </div>
  );
};

export default TopNavBar;