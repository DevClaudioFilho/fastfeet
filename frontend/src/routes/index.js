import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Packages from '../pages/Packages'
import CreatePackages from '../pages/CreatePackages'
import Deliverymans from '../pages/Deliverymans'
import CreateDeliverymans from '../pages/CreateDeliverymans'
import EditDeliverymans from '../pages/EditDeliverymans'
import Recipients from '../pages/Recipients'
import CreateRecipients from '../pages/CreateRecipients'
import Problems from '../pages/Problems'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/packages" component={Packages} isPrivate/>
      <Route path="/createpackages" component={CreatePackages} isPrivate/>
      <Route path="/deliverymans" component={Deliverymans} isPrivate/>
      <Route path="/createdeliverymans" component={CreateDeliverymans} isPrivate/>
      <Route path="/editdeliverymans" component={EditDeliverymans} isPrivate/>
      <Route path="/recipients" component={Recipients} isPrivate/>
      <Route path="/createrecipients" component={CreateRecipients} isPrivate/>
      <Route path="/problems" component={Problems} isPrivate/>
    </Switch>
  );
}
