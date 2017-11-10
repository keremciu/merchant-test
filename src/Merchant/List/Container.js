import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography';

import { createFetchMerchants } from './actions'
import MerchantList from '../view/MerchantList'
import Loadable from 'Components/Loadable'

class List extends PureComponent {
  componentWillMount() {
    this.props.dispatch(createFetchMerchants());
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
  dispatch: action => action,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
