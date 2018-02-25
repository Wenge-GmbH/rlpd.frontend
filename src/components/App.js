import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentPlate } from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.currentPlate();
  }
  renderLinks() {
    if(this.props.authenticated) {
      return(
        <nav>
          <Link to="/signout">Signout</Link>
          <Link to="/log/success">Success Log</Link>
          <Link to="/log/error">Error Log</Link>
        </nav>
      );
    }
  }

  render() {
    const { current: plate = 'loading plate' } = this.props.plate;
    return (
      <div className="app">
        <h1 className={this.props.authenticated ? 'plate' : 'plate big'}>{plate}</h1>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = ({plate, auth}) => ({plate, authenticated: auth.authenticated});

export default connect(
  mapStateToProps,
  { currentPlate }
)(App);
