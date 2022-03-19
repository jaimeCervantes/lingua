import { AppBar, Toolbar, IconButton, Slide, Box, Button } from '@mui/material';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { 
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import DiscordIcon from '../Icons/DiscordIcon';

function ShowOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  return (
    <>

        <AppBar position="static" sx={{ backgroundColor: 'rgb(85, 0, 0)' }} elevation="0">
          <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
          <div style={{ flexGrow: 1 }}>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="Facebook"
              href="https://www.facebook.com/LinguaLlama2021/"
              target="_blank"
              >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="Instagram"
              href="https://www.instagram.com/linguallama/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="WhatsApp"
              href="https://wa.me/12018380698"
              target="_blank"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="Discord"
              href="https://disboard.org/server/762367346890768394"
              target="_blank"
            >
              <DiscordIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="YouTube"
              href="https://www.youtube.com/c/LINGUALLAMAServingAllLanguagesWorldwide"
              target="_blank"
            >
              <YouTubeIcon />
            </IconButton>
            </div>
            <Button variant="text" sx={{ color: 'white', fontSize: '1.4rem' }} href="tel:+12018380698">
              +1 201 838 0698 <PhoneInTalkIcon sx={{ marginLeft: '0.5rem' }}/>
            </Button>
          </Toolbar>
        </AppBar>


        <AppBar position="relative" color="secondary" elevation="0">
          <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            <img
              src="/logo-white.svg" height="100"
              style={{
                marginRight: '1rem',
                paddingTop: '0.7rem',
                paddingBottom: '0.7rem'
              }}
            ></img>
            <Box sx={{ flexGrow: 1, display: { sm: 'flex', xs: 'none' } }}>
              {['Home', 'Events', 'About'].map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: 'white',
                    display: 'inline-block',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>


      <ShowOnScroll {...props}>
        <AppBar color="secondary">
          <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            <img
              src="/logo-white.svg" height="90"
              style={{
                marginRight: '1rem',
                paddingTop: '0.7rem',
                paddingBottom: '0.7rem'
              }}
            ></img>
            <Box sx={{ flexGrow: 1, display: { sm: 'flex', xs: 'none' } }}>
              {['Home', 'Events', 'About'].map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: 'white',
                    display: 'inline-block',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="Facebook"
              href="https://www.facebook.com/LinguaLlama2021/"
              target="_blank"
              >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="Instagram"
              href="https://www.instagram.com/linguallama/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="WhatsApp"
              href="https://wa.me/12018380698"
              target="_blank"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="Discord"
              href="https://disboard.org/server/762367346890768394"
              target="_blank"
            >
              <DiscordIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="YouTube"
              href="https://www.youtube.com/c/LINGUALLAMAServingAllLanguagesWorldwide"
              target="_blank"
            >
              <YouTubeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ShowOnScroll>
    </>
  );
}
