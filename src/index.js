import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, hashHistory, IndexRoute, Link, Router, Route } from 'react-router'
import App from './App';
import Add from './Add';
import Detail from './Detail';
import List from './List';
import Login from './Login';
import './index.css';

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} />
        <Route path="list" component={List}>
          <Route path="detail/:id" component={Detail} />
        </Route>
        <Route path="add" component={Add} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
