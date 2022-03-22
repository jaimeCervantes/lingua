import { AppBar, Toolbar } from "@mui/material";

import LlamaShowOnScrollAppBar from "../LlamaShowOnScrollAppBar/LlamaShowOnScrollAppBar";
import LlamaLogo from "../LlamaLogo/LlamaLogo";
import LlamaMenu from "../LlamaMenu/LlamaMenu";
import LlamaSocialNetworks from '../LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from '../LlamaTelButton/LlamaTelButton';

export default function LlamaAppBars(props) {
  return (
    <>
      <AppBar component="div" color="secondary" position="relative">
        <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
          
          <LlamaLogo sx={{ width: { xs: '100px', sm: '200px' } }}></LlamaLogo>

          <LlamaMenu></LlamaMenu>
          
          <LlamaSocialNetworks sx={{ display: { xs: 'none', sm: 'block' } }}>
            <LlamaTelButton></LlamaTelButton>
          </LlamaSocialNetworks>
        </Toolbar>
      </AppBar>

      <LlamaShowOnScrollAppBar />
    </>
  );
}



