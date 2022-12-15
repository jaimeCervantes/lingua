import { Box, Button, IconButton, Paper } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';

export default function LlamaPlacementTestButton({ sx }) {
  return (
    <Box sx={ sx || {
      position: 'fixed',
      bottom: '30px',
      width: '100%',
      textAlign: 'center',
      zIndex: 20,
      fontFamily: 'Bangers',
      display: 'flex',
      justifyContent: 'center',
      color: 'white'
    }}>
      <Button
        color="secondary"
        variant="contained"
        sx={{ color: "#fff" }}
      >
        Placement Tests: 
        <IconButton
          color="primary"
          href="https://app.nearpod.com/?pin=LPDTU"
          target="__blank"
          title='Speaking'
        >
          <RecordVoiceOverIcon fontSize='large'/>
        </IconButton>
        <IconButton
          color="primary"
          href="https://quizizz.com/join?gc=06007947"
          target="__blank"
          title='Grammar and Vocabulary'
        >
          <SpellcheckIcon fontSize='large'/>
        </IconButton>
      </Button>
    </Box>
  );
}