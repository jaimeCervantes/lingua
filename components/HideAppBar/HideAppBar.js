import { AppBar, Toolbar, Typography, Slide, Box, Button } from '@mui/material';
import useScrollTrigger from "@mui/material/useScrollTrigger";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: 'rgb(85, 0, 0)'}}>
          <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            <img src="/logo-white.svg" height="40" />
            <Box sx={{ flexGrow: 1, display: 'flex', paddingLeft: '1rem' }}>
              {['Home', 'Events', 'About'].map((page) => (
                <Button
                  key={page}
                  sx={{ color: 'white', display: 'inline-block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar />
    </>
  );
}
