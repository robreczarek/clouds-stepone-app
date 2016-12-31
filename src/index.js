import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, hashHistory, IndexRoute, Link, Router, Route } from 'react-router';

import './index.css';

import App from './App';
import Add from './Add';
import Auth from './Auth';
import Detail from './Detail';
import List from './List';
import Login from './Login';

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="add" component={Add} />
        <Route path="login" component={Login} />
        <Route path="list" component={List}>
          <Route path="detail/:id" component={Detail} />
        </Route>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
