import { AppBar, Toolbar } from "@mui/material";

import LlamaShowOnScrollAppBar from "../LlamaShowOnScrollAppBar/LlamaShowOnScrollAppBar";
import LlamaLogo from "../LlamaLogo/LlamaLogo";
import LlamaMenu from "../LlamaMenu/LlamaMenu";
import LlamaSocialNetworks from '../LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from '../LlamaTelButton/LlamaTelButton';

export default function LlamaAppBars(props) {
  return (
    <>
      <LlamaShowOnScrollAppBar elevation={0}>
        <LlamaLogo></LlamaLogo>

        <LlamaMenu></LlamaMenu>

        <LlamaSocialNetworks sx={{ display: { xs: 'none', sm: 'block' } }}>
          
        </LlamaSocialNetworks>
        <LlamaTelButton></LlamaTelButton>
      </LlamaShowOnScrollAppBar>
    </>
  );
}



