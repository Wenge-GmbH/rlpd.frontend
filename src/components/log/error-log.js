import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLog } from '../../actions';

class Errorlog extends Component {
  componentWillMount() {
    console.log('hi');
    this.props.getLog('error');
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default connect(null, { getLog })(Errorlog);
