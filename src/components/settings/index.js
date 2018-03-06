import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../helpers';
import { getSettings, updateSettings, stopDetection } from '../../actions';

class Settings extends Component {
  componentWillMount() {
    this.props.getSettings();
  }
  handleSubmit = (values) => {
    let { interval: { success, nighttime, error}} = this.props.settings;
    success = values.success || success;
    error = values.error || error;
    nighttime = values.nighttime || nighttime;
    console.log(success, error, nighttime);

    this.props.updateSettings({success, error, nighttime});
  }

  stopDetection = () => {
    this.props.stopDetection(this.props.settings.stopped);
  }

  renderForm() {
    if(this.props.settings.interval) {
      const { interval: { success, nighttime, error}} = this.props.settings;
      const { handleSubmit } = this.props;
      return (
        <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
          <h3 className="fullWidth align-center">Settings</h3>
          <div>
            <Field
              name="success"
              type="number"
              label="Success Interval (ms)"
              currentValue={success}
              component={renderField}
            />
            <Field
              name="error"
              type="number"
              label="Error Interval (ms)"
              currentValue={error}
              component={renderField}
            />
            <Field
              name="nighttime"
              type="number"
              label="Nighttime Interval (ms)"
              currentValue={nighttime}
              component={renderField}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      )
    }
  }

  render() {
    return (
      <div className="outer-container fullScreenSection row flex-align-center justify-center">
        <div className="container">
          {this.renderForm()}
          <div>
            <button
              className="danger"
              onClick={this.stopDetection}
            >Toggle Detection</button>
            <p>Current Status: {this.props.settings.stopped ? 'stopped' : 'running'}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings});

export default reduxForm({
  form: 'settings',
})(
  connect(
    mapStateToProps,
    { getSettings, updateSettings, stopDetection }
  )(Settings)
);
