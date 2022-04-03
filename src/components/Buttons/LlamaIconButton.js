import { forwardRef } from 'react';
import { Button } from '@mui/material';

export default function LlamaIconButton({ sx, children, ...rest }) {
  
  return (
    <Button
      color="secondary"
      sx={{
        fontFamily: 'Bangers',
        ...sx
      }}
      
      {...rest}
    >
      {children}
    </Button>
  );
}
