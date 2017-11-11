import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import { createFetchMerchant } from '../Edit/actions'
import Loadable from 'Components/Loadable'
import BidList from '../view/BidList'

class Detail extends PureComponent {

  componentWillMount() {
    this.props.fetchMerchant(this.props.match.params.id);
  }

  render() {
    const { merchant } = this.props;
    return (
      <Loadable status={this.props.status}>
        <div>
          <header style={{ marginTop: '10px' }}>
            <Typography type="subheading" gutterBottom align="center">
              You're showing the details of <strong>merchant #{merchant.id}</strong>.
            </Typography>
          </header>
          <main>
            History of bids of {merchant.firstname} {merchant.lastname}:
            <BidList
              data={merchant.bids || []}
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
  fetchMerchant: createFetchMerchant
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
