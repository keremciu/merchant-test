import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { createFetchMerchants } from './actions'

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
          {this.props.merchants.map((merchant, index) => (
            <div key={index}>
              {merchant.firstname}
            </div>
          ))}
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
