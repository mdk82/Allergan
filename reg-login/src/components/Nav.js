import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="Home">
      Home
    </Link>
    <div className="right menu"></div>
    <Link to="/login" className="login">
      login
    </Link>
    <Link to="/register" className="register">
      register
    </Link>
  </div>
);

export default Navigation;
