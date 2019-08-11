import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="ui secondary menu">
    <Link to="/" className="item">
      Home
    </Link>
    <div className="right menu"></div>
    <Link to="/login" className="item">
      login
    </Link>
    <Link to="/register" className="item">
      register
    </Link>
  </div>
);

export default Navigation;
