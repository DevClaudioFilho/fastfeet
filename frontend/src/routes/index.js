import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Packages from '../pages/Packages'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/packages" exact component={Packages} isPrivate/>
    </Switch>
  );
}
