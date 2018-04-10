import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/auth/private-route';
import App from './components/App';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import SuccessLog from './components/log/success-log';
import ErrorLog from './components/log/error-log';
import VideoStream from './components/video-stream';

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
          <PrivateRoute path="/stream" component={VideoStream} />
        </Switch>
      </div>
    )
  }
}

export default MainRouter;
