import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';

const required = value => (value ? undefined : 'Required');
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    fullWidth
    label={label}
    margin="normal"
    error={touched && error}
    helperText={touched ? error : ' '}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
        value={input.value}
      />
    }
    label={label}
  />
);

class MerchantForm extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ width: '40%', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="firstname"
              component={renderTextField}
              label="First Name"
              validate={[required, alphaNumeric, minLength(3)]}
            />
          </div>
          <div>
            <Field
              name="lastname"
              component={renderTextField}
              label="Last Name"
              validate={[required, alphaNumeric, minLength(3)]}
            />
          </div>
          <div>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              validate={[required, email]}
            />
          </div>
          <div>
            <Field
              name="phone"
              component={renderTextField}
              label="Phone Number"
              validate={[required, minLength(10)]}
            />
          </div>
          <div>
            <Field
              name="avatarUrl"
              component={renderTextField}
              label="Avatar (URL)"
            />
          </div>
          <div>
            <Field
              name="hasPremium"
              component={renderCheckbox}
              label="Has Premium?"
            />
          </div>
          <Button raised color="primary" type="submit" style={{ margin: '15px 0px 50px', padding: '10px 30px' }}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

MerchantForm.propTypes = {
  initialValues: PropTypes.object,
};

export default reduxForm({
  form: 'merchant',
})(MerchantForm);
