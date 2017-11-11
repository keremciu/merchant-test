import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import { createFetchMerchant, createEditMerchant } from './actions'
import MerchantForm from '../view/MerchantForm'
import Loadable from 'Components/Loadable'
import Snackbar from 'Components/Snackbar'

class Edit extends PureComponent {
  constructor(props) {
    super(props);

    this.editMerchant = this.editMerchant.bind(this);
  }

  componentWillMount() {
    this.props.fetchMerchant(this.props.match.params.id);
  }

  editMerchant(values) {
    const callbackAfterSuccess = () => {
      Snackbar({
        message: `The data of ${values.firstname} ${values.lastname} merchant has changed.`
      })
      this.props.history.push('/');
    }
    this.props.editMerchant(
      this.props.match.params.id,
      values,
      callbackAfterSuccess
    );
  }

  render() {
    return (
      <Loadable status={this.props.status}>
        <div>
          <header style={{ marginTop: '10px' }}>
            <Typography type="subheading" gutterBottom align="center">
              You're editing merchant #<strong>{this.props.merchant.id} merchant</strong>.
            </Typography>
          </header>
          <main>
            <MerchantForm
              initialValues={this.props.merchant}
              onSubmit={this.editMerchant}
            />
          </main>
        </div>
      </Loadable>
    )
  }
}

function mapStateToProps(state) {
  return {
    merchant: state.merchant.edit.data,
    status: state.merchant.edit.status,
  };
}

const mapDispatchToProps = {
  fetchMerchant: createFetchMerchant,
  editMerchant: createEditMerchant
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
