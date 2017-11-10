import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { createFetchMerchants } from './actions'

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import MerchantList from './view/MerchantList'

class List extends PureComponent {
  constructor(props) {
    super(props);

    console.log(props);
  }

  componentWillMount() {
    this.props.dispatch(createFetchMerchants());
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        <main>
          <MerchantList
            data={this.props.merchants}
          />
          <Button fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    merchants: state.merchant.data,
  };
}

const mapDispatchToProps = {
  dispatch: action => action,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
