import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentPlate } from '../actions';

import Settings from './settings';

class App extends Component {
  state = {
    nav: false,
  }

  componentWillMount() {
    this.props.currentPlate();
  }

  renderSettings() {
    if(this.props.authenticated && this.props.history.location.pathname === '/') {
      return <Settings />;
    }
  }

  toggleNav = () => {
    this.setState({
      nav: !this.state.nav
    })
  }

  renderLinks() {
    if(this.props.authenticated) {
      return(
        <nav className={`column flex-align-start justify-start ${this.state.nav ? 'open' : ''}`}>
          <Link onClick={this.toggleNav} to="/">Home</Link>
          <Link onClick={this.toggleNav} to="/log/success">Success Log</Link>
          <Link onClick={this.toggleNav} to="/log/error">Error Log</Link>
          <Link onClick={this.toggleNav} to="/signout">Signout</Link>
        </nav>
      );
    }
  }

  render() {
    const { current: plate = 'loading plate' } = this.props.plate;
    return (
      <div className={this.props.authenticated ? "app app-authed" : "app app-unauthed"}>
        <h1 className={this.props.authenticated ? 'plate small' : 'plate big'} onClick={this.toggleNav}>{plate}</h1>
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
