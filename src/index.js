import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, IndexRoute, Router, Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';

import App from './App';
import Add from './Add';
import List from './List';
import Login from './Login';

injectTapEventPlugin();

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="add" component={Add} />
        <Route path="login" component={Login} />
        <Route path="list" component={List} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
