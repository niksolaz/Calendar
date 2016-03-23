
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Home from './views';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
      <Route path="/" component={Home}/>
  </Router>
  ,document.getElementById('app'));
