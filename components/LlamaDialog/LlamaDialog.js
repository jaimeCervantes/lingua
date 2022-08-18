import { Button, Dialog, DialogActions } from '@mui/material';
import { useState } from 'react';

export default function LlamaDialog({ open, children, ...rest }) {
  const [isOpen, setIsOpen] = useState(()  => open)

  return (
    <Dialog
      open={isOpen}
      {...rest}
    >
      {children}
      <DialogActions>
        <Button color="tertiary" onClick={() => setIsOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}