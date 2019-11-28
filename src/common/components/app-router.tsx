import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import '@commonScss';
import Home from '@comp/home';

const AppRouter: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default AppRouter;
