import { forwardRef } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button } from '@mui/material';
import LlamaSocialNetworks from '../LlamaSocialNetworks/LlamaSocialNetworks';

export default forwardRef(function LlamaAppBar(props, ref) {
  const {
    children,
    childrenRight,
    appBarProps,
    logoSize,
    logoChild,
    menuChild,
    menuFontSize } = props;

  return (
    <>
    <AppBar component="div" {...appBarProps} ref={ref}>
      <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        {
          logoChild || <Box
            sx={{
              marginRight: { sm: '1rem', xs: 'none' },
              paddingTop: '0.7rem',
              paddingBottom: '0.7rem',
              width: logoSize || { xs: '150px', sm: '200px' }
            }}
          >
            <img
              src="/logo-white.svg"
              style={{ width: '100%'}}
            />
          </Box>
        }

        {
          menuChild || <Box sx={{ flexGrow: 1, display: { sm: 'flex' } }}>
            {['Home', 'Events', 'About'].map((page) => (
              <Button
                key={page}
                sx={{
                  color: 'white',
                  display: 'inline-block',
                  '&:hover': {
                    textDecoration: 'underline'
                  },
                  fontSize: menuFontSize || { sm: '1.5rem', xs: '1.3rem' },
                  fontFamily: 'Bangers'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        }

        {children}
        
        {childrenRight || <LlamaSocialNetworks></LlamaSocialNetworks>}
      </Toolbar>
    </AppBar>
  </>
  );
});