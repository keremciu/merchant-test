import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import { createAddMerchant } from './actions'
import MerchantForm from '../view/MerchantForm'
import Loadable from 'Components/Loadable'
import Snackbar from 'Components/Snackbar'

class Add extends PureComponent {
  constructor(props) {
    super(props);

    this.addMerchant = this.addMerchant.bind(this);
  }

  addMerchant(values) {
    const callbackAfterSuccess = () => {
      Snackbar({
        message: `You added ${values.firstname} ${values.lastname} as a new merchant.`
      })
      this.props.history.push('/');
    }

    this.props.addMerchant(
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
              You're adding a new merchant.
            </Typography>
          </header>
          <main>
            <MerchantForm
              initialValues={{
                hasPremium: false,
                bids: [],
              }}
              onSubmit={this.addMerchant}
            />
          </main>
        </div>
      </Loadable>
    )
  }
}

function mapStateToProps(state) {
  return {
    status: state.merchant.add.status,
  };
}

const mapDispatchToProps = {
  addMerchant: createAddMerchant
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
