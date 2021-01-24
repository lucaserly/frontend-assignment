import React from 'react';
import './LandingPage.css';
import QueryByType from '../QueryByType';
import QueryByName from '../QueryByName';

export const LandingPage = (): JSX.Element => {

  return (
    <div className="landing_page_container">
      <h4 className="test">
        Hello From LandingPage
      </h4>
      <QueryByType />
      <QueryByName />
    </div>
  );
};