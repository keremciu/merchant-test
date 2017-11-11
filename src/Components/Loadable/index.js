import React, { PureComponent } from 'react'
import { CircularProgress } from 'material-ui/Progress';

export default class Loadable extends PureComponent {
  render() {
    const { status } = this.props;
    if (status.busy && !status.success) {
      return (
        <CircularProgress size={80} style={{ marginTop: '50px' }} />
      )
    }

    return this.props.children
  }
}