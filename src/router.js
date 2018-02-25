import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/auth/private-route';
import App from './components/App';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import SuccessLog from './components/log/success-log';
import ErrorLog from './components/log/error-log';

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={App} />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <PrivateRoute path="/log/success" component={SuccessLog} />
          <PrivateRoute path="/log/error" component={ErrorLog} />
        </Switch>
      </div>
    )
  }
}

export default MainRouter;
