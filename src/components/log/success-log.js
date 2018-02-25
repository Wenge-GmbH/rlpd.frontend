import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLog } from '../../actions';

class SuccessLog extends Component {
  componentWillMount() {
    this.props.getLog('success');
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default connect(null, { getLog })(SuccessLog);
