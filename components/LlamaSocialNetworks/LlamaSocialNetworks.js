import { Box, IconButton, Button } from '@mui/material';
import { 
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import DiscordIcon from '../Icons/DiscordIcon';

export default function LlamaSocialNetworks ({ sx, children }) {
  return (
    <>
      <Box sx={sx}>
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
          {children}
        </IconButton>
      </Box>
    </>
  );
}