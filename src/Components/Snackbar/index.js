import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

export default function snackbar(props) {
  const $node = document.createElement('div');
  document.body.appendChild($node);

  const handleRequestClose = () => {
    unmountComponentAtNode($node);
    document.body.removeChild($node);
  }

  render(
    <Snackbar
      open
      autoHideDuration={2000}
      onRequestClose={handleRequestClose}
      message={props.message}
      action={
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleRequestClose}
        >
          <CloseIcon />
        </IconButton>
      }
    />,
    $node
  );
}
