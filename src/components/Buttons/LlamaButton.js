import { forwardRef } from 'react';
import { Button } from '@mui/material';

const LlamaButton = forwardRef(function LlamaButton({ sx, children, current, ...rest }, ref) {
  
  return (
    <Button
      ref={ref}
      color="secondary"
      sx={{
        display: 'inline-block',
        textDecoration: Boolean(current) ? 'underline' : 'none',
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

export default LlamaButton