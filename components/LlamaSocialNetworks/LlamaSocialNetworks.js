import { Box, IconButton } from '@mui/material';
import { 
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import DiscordIcon from '../Icons/DiscordIcon';
import MeetupIcon from '../Icons/MeetupIcon';

export default function LlamaSocialNetworks ({ sx, color, children }) {
  return (
    <>
      <Box sx={sx}>
        <IconButton
          sx={{ color: color || 'secondary.main' }}
          aria-label="Facebook"
          href="https://www.facebook.com/LinguaLlama2021/"
          target="_blank"
          >
          <FacebookIcon />
        </IconButton>
      
        <IconButton
          sx={{ color: color || 'secondary.main' }}
          aria-label="Instagram"
          href="https://www.instagram.com/linguallama/"
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{ color: color || 'secondary.main' }}
          aria-label="WhatsApp"
          href="https://linktr.ee/LinguaLlama "
          target="_blank"
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          sx={{ color: color || 'secondary.main' }}
          aria-label="Discord"
          href="https://disboard.org/server/762367346890768394"
          target="_blank"
        >
          <DiscordIcon />
        </IconButton>

        <IconButton
          sx={{ color: color || 'secondary.main' }}
          aria-label="Meetup"
          href="https://www.meetup.com/linguallama/"
          target="_blank"
        >
          <MeetupIcon />
        </IconButton>

        <IconButton
          sx={{ color: color || 'secondary.main' }}
          aria-label="YouTube"
          href="https://www.youtube.com/c/LINGUALLAMAServingAllLanguagesWorldwide"
          target="_blank"
        >
          <YouTubeIcon />
        </IconButton>
        
        {children}
      </Box>
    </>
  );
}