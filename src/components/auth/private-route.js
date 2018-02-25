import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest, authenticated }) => (
  <Route {...rest} render={props => (
    authenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const mapStateToProps = ({auth}) => {
  return { authenticated: auth.authenticated };
}

export default connect(mapStateToProps)(PrivateRoute);
