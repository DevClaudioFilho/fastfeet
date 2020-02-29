import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Packages from '../pages/Packages'
import Deliverymans from '../pages/Deliverymans'
import Recipients from '../pages/Recipients'
import Problems from '../pages/Problems'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/packages" component={Packages} isPrivate/>
      <Route path="/deliverymans" component={Deliverymans} isPrivate/>
      <Route path="/recipients" component={Recipients} isPrivate/>
      <Route path="/problems" component={Problems} isPrivate/>
    </Switch>
  );
}
