import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Navigation from './Nav';

const App = () => (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Navigation />
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
