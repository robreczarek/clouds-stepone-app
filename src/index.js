import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, hashHistory, IndexRoute, Link, Router, Route } from 'react-router'
import App from './App';
import View from './View';
import Add from './Add';
import './index.css';

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="view" component={View} />
        <Route path="add" component={Add} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
