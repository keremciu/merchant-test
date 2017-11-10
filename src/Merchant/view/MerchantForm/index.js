import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox'
import { FormControlLabel } from 'material-ui/Form';

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
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={input.value ? true : false}
        onCheck={input.onChange}
        value={input.value}
      />
    }
    label={label}
  />
)

class MerchantForm extends PureComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      editMode: !!this.props.merchant,
    };
  }

  render() {
    const { handleSubmit } = this.props;
    const { editMode } = this.state;
    return (
      <div style={{ width: '40%', margin: '0 auto' }}>
        <form onSubmit={ handleSubmit }>
          <div>
            <Field name="firstname" component={renderTextField} label="First Name" />
          </div>
          <div>
            <Field name="lastname" component={renderTextField} label="Last Name" />
          </div>
          <div>
            <Field name="email" component={renderTextField} label="Email" />
          </div>
          <div>
            <Field name="phone" component={renderTextField} label="Phone Number" />
          </div>
          <div>
            <Field name="avatarUrl" component={renderTextField} label="Avatar (URL)" />
          </div>
          <div>
            <Field name="hasPremium" component={renderCheckbox} label="Has Premium?" />
          </div>
          <Button raised color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
};

MerchantForm.propTypes = {
  initialValues: PropTypes.object,
};

export default reduxForm({
  form: 'merchant'
})(MerchantForm);
