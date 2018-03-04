import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getLog } from '../../actions';
import moment from 'moment';

class SuccessLog extends Component {
  componentWillMount() {
    this.props.getLog('success');
  }

  renderResults = (item) => {
  return _.map(item.results.candidates, (plate, i) => {
      return (
        <div key={i} className="log log-results row nowrap flex-align-stretch justify-space-between">
          <p className="col-1">{i + 1}</p>
          <p className="col-7">{plate.plate}</p>
          <p className="col-4">{parseInt(plate.confidence, 10)} %</p>
        </div>
      );
    });
  }

  render() {
    const log = _.map(this.props.success, (item) => {
      const date = moment(item.epoch_time).add(1, 'h').format('HH:mm:ss - DD.MM.YYYY');
      return (
        <div className="log log-item column nowrap nop col-5 shadow" key={item.epoch_time}>
          <div className="log log-head row flex-align-stretch justify-center">
            <p className="col-12 date">{date}</p>
            <h3 className="col-6">{item.plate}</h3>
            <p className="col-6 row flex-align-center justify-center">{parseInt(item.processing_time_ms, 10)} ms</p>
          </div>
          <div className="logg log-body">
            {this.renderResults(item)}
          </div>
        </div>
      );
    });


    return (
      <div className="outer-container">
        <h1 className="align-center">SuccessLog</h1>
        <div className="row container justify-center flex-align-start">
          {log.reverse()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({log: { success }}) => ({ success });

export default connect(mapStateToProps, { getLog })(SuccessLog);
