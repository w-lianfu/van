import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import '@commonScss';
import Home from '@comp/home';
import Film from '@comp/film';

const AppRouter: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/film" component={Film} />
    </Switch>
  </Router>
)

export default AppRouter;
