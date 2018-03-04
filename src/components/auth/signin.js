import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../helpers';
import { signinUser } from '../../actions';

class Signin extends Component {
  handleSubmit({ email, password }) {
    this.props.signinUser({ email, password }, (path) => {
      this.props.history.push(path);
    })
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form className="signin" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
        <Field
           name="email"
           type="email"
           label="Email:"
           component={renderField}
         />
         <Field
           name="password"
           type="password"
           label="Password:"
           component={renderField}
         />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(
  connect(
    null,
    { signinUser }
  )(Signin)
);
