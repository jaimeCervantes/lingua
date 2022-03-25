import { Button } from '@mui/material';

export default function LlamaButton({ sx, children, ...rest }) {
  return (
    <Button
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
}