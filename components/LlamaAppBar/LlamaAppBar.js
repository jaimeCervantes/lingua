import { Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import LlamaShowOnScrollAppBar from "../LlamaShowOnScrollAppBar/LlamaShowOnScrollAppBar";
import LlamaLogo from "../LlamaLogo/LlamaLogo";
import LlamaMenu from "../LlamaMenu/LlamaMenu";
import LlamaSocialNetworks from '../LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from '../LlamaTelButton/LlamaTelButton';
import LlamaButton from "../Buttons/LlamaButton";

export default function LlamaAppBars(props) {
  return (
    <>
      <LlamaShowOnScrollAppBar elevation={0}>
        <LlamaLogo></LlamaLogo>

        <LlamaMenu></LlamaMenu>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'initial', md: 'none' },
            justifyContent: 'start',
            marginLeft: '1rem'
          }}
        >
          <LlamaButton startIcon={<MenuIcon></MenuIcon>}>Menu</LlamaButton>
        </Box>
        

        <LlamaSocialNetworks sx={{ display: { xs: 'none', md: 'flex' } }}>
          
        </LlamaSocialNetworks>
        <LlamaTelButton sx={{ justifyContent: 'end' }}></LlamaTelButton>
      </LlamaShowOnScrollAppBar>
    </>
  );
}



