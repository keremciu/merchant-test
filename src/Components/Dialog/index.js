/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default function ConfirmDialog(props) {
  const $node = document.createElement('div');
  document.body.appendChild($node);

  const handleRequestClose = () => {
    unmountComponentAtNode($node);
    document.body.removeChild($node);
  }

  const handleConfirm = () => {
    if (props.onConfirm) {
      props.onConfirm();
    }
    unmountComponentAtNode($node);
    document.body.removeChild($node);
  }

  render(
    <Dialog open onRequestClose={handleRequestClose}>
      <DialogTitle>{props.title}</DialogTitle>
      {props.message && (
        <DialogContent>
          <DialogContentText>
            {props.message}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleRequestClose} color="secondary">
          Disagree
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>,
    $node
  );
}