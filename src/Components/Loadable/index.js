import React, { PureComponent } from 'react'
import { CircularProgress } from 'material-ui/Progress';

export default class Loadable extends PureComponent {
  render() {
    if (this.props.status.busy) {
      return (
        <CircularProgress size={80} style={{ marginTop: '50px' }} />
      )
    }

    return this.props.children
  }
}