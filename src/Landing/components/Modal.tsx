import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Modal = (props: any) => {
  const { classes, open, setOpen } = props;

  return (
      <Dialog className={classes.rootModal} open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter your Username and Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.modalLinkCancel} onClick={() => {
              setOpen(false);
          }} color="primary">
            Cancel
          </Button>
          <Button className={classes.modalLink} onClick={() => {
              setOpen(false);
          }} color="primary">
            Login
          </Button>
          <Button className={classes.modalButton} onClick={() => {
              setOpen(false);
          }} color="primary" variant="contained" disableElevation>
            Login as a Guest
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default Modal;