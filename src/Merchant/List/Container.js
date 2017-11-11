import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography';

import { createFetchMerchants, createDeleteMerchant } from './actions'
import MerchantList from '../view/MerchantList'
import Loadable from 'Components/Loadable'
import ConfirmDialog from 'Components/Dialog'
import Snackbar from 'Components/Snackbar'

class List extends PureComponent {
  constructor(props) {
    super(props);

    this.deleteMerchant = this.deleteMerchant.bind(this);
  }

  componentWillMount() {
    this.props.fetchMerchants();
  }

  deleteMerchant(merchant) {
    ConfirmDialog({
      title: `Are you sure you want to delete "${merchant.firstname} ${merchant.lastname}"?`,
      onConfirm: () => {
        this.props.deleteMerchant(
          merchant.id,
          () => {
            Snackbar({
              message: `Merchant ${merchant.firstname} ${merchant.lastname} has deleted on the system.`
            })
          }
        );
      }
    })
  }

  render() {
    return (
      <Loadable status={this.props.status}>
        <div>
          <header style={{ marginTop: '10px' }}>
            <Typography type="subheading" gutterBottom align="center">
              <strong>{this.props.merchants.length} merchants</strong> are listing.
            </Typography>
          </header>
          <main>
            <MerchantList
              data={this.props.merchants}
              deleteMerchant={this.deleteMerchant}
            />
          </main>
        </div>
      </Loadable>
    )
  }
}

function mapStateToProps(state) {
  return {
    merchants: state.merchant.list.data,
    status: state.merchant.list.status,
  };
}

const mapDispatchToProps = {
  fetchMerchants: createFetchMerchants,
  deleteMerchant: createDeleteMerchant
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
