import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import CanvasPage from './containers/CanvasPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/canvas" component={CanvasPage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
