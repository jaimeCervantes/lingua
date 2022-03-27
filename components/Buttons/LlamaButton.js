import { forwardRef } from 'react';
import { Button } from '@mui/material';

export default forwardRef(function LlamaButton({ sx, children, ...rest }, ref) {
  return (
    <Button
      ref={ref}
      color="secondary"
      sx={{
        display: 'inline-block',
        '&:hover': {
          textDecoration: 'underline'
        },
        fontSize: {
          xs: '1.3rem',
          sm: '1.5rem'
        },
        fontFamily: 'Bangers',
        ...sx
      }}

      {...rest}
    >
      {children}
    </Button>
  );
});