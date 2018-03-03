import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getLog } from '../../actions';

class SuccessLog extends Component {
  componentWillMount() {
    this.props.getLog('success');
  }
  render() {
    const log = _.map(this.props.success, (item) => {
      return (
        <div key={item.epoch_time}>
          <p>{item.epoch_time}</p>
          <p>{item.plate}</p>
          <p>{item.processing_time_ms}</p>
        </div>
      );
    })
    return (
      <div>{log}</div>
    );
  }
}

const mapStateToProps = ({log: { success }}) => ({
  success
})

export default connect(mapStateToProps, { getLog })(SuccessLog);
