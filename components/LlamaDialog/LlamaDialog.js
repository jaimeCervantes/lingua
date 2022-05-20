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
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}