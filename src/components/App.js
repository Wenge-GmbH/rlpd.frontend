import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentPlate } from '../actions';

import Settings from './settings';

class App extends Component {
  componentWillMount() {
    this.props.currentPlate();
  }
  renderSettings() {
    if(this.props.authenticated && this.props.history.location.pathname === '/') {
      return <Settings />;
    }
  }

  renderLinks() {
    if(this.props.authenticated) {
      return(
        <nav className="column flex-align-start justify-start">
          <Link to="/">Home</Link>
          <Link to="/log/success">Success Log</Link>
          <Link to="/log/error">Error Log</Link>
          <Link to="/signout">Signout</Link>
        </nav>
      );
    }
  }

  render() {
    const { current: plate = 'loading plate' } = this.props.plate;
    return (
      <div className={this.props.authenticated ? "app app-authed" : "app app-unauthed"}>
        <h1 className={this.props.authenticated ? 'plate small' : 'plate big'}>{plate}</h1>
        {this.renderLinks()}
        {this.renderSettings()}
      </div>
    );
  }
}

const mapStateToProps = ({plate, auth}) => ({plate, authenticated: auth.authenticated});

export default connect(
  mapStateToProps,
  { currentPlate }
)(App);
