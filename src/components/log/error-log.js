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
    console.log(errorImages);
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
        <div key={key}>
          <p>{date}</p>
          <div className="img-container">
            {this.renderImage(key)}
          </div>
        </div>
      )
    })
    return (
      <div>{log}</div>
    );
  }
}

const mapStateToProps = ({log: { error, errorImages }}) => ({ error, errorImages })

export default connect(mapStateToProps, { getLog })(Errorlog);
