import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import { getLog } from '../../actions';


class Errorlog extends Component {
  componentWillMount() {
    console.log('hi');
    this.props.getLog('error');
  }

  renderImage = (key) => {
    const { errorImages } = this.props;
    if (errorImages) {
      return <img src={errorImages[key]} />;
    } else {
      return <p>...loading</p>;
    }
  }

  render() {
    const log = _.map(this.props.error, (item, key) => {
      const date = moment(item.epoch_time).add(1, 'h').format('HH:mm:ss - DD.MM.YYYY');
      return (
        <div key={key} className="error-log-item">
          <p>{date}</p>
          <div className="img-container">
            {this.renderImage(key)}
          </div>
        </div>
      )
    })

    return (
      <div className="outer-container">
        <h1 className="align-center">Errorlog</h1>
        <div className="row container justify-center flex-align-center">
          {log.reverse()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({log: { error, errorImages }}) => ({ error, errorImages })

export default connect(mapStateToProps, { getLog })(Errorlog);
