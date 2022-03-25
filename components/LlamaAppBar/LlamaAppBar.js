import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LlamaShowOnScrollAppBar from "../LlamaShowOnScrollAppBar/LlamaShowOnScrollAppBar";
import LlamaLogo from "../LlamaLogo/LlamaLogo";
import LlamaMenu from "../LlamaMenu/LlamaMenu";
import LlamaSocialNetworks from '../LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from '../LlamaTelButton/LlamaTelButton';
import LlamaButton from "../Buttons/LlamaButton";

export default function LlamaAppBars({ openMenu }) {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)

  return (
    <>
      <LlamaShowOnScrollAppBar elevation={0}>
        <LlamaLogo></LlamaLogo>

        <LlamaMenu sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: {  md: '1rem' } }}></LlamaMenu>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'initial', md: 'none' },
            justifyContent: 'start',
            marginLeft: '1rem'
          }}
        >
          <LlamaButton 
            startIcon={<MenuIcon></MenuIcon>}
            onClick={() => setIsOpenedMenu(true)}
          >
            Menu
          </LlamaButton>
        </Box>
        
        <LlamaSocialNetworks sx={{ display: { xs: 'none', md: 'flex' } }}>
          
        </LlamaSocialNetworks>
        <LlamaTelButton sx={{ justifyContent: 'end' }}></LlamaTelButton>
      </LlamaShowOnScrollAppBar>
      <Drawer
        anchor="left"
        open={isOpenedMenu}
        onClose={() => setIsOpenedMenu(false)}
        
      >
        <Box sx={{ padding: '1rem' }}>
          <LlamaLogo sx={{ marginLeft: 'auto', marginRight: 'auto', width: '200px', marginBottom: '1rem'}}></LlamaLogo>
          <LlamaMenu sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', marginBottom: '1rem' }}></LlamaMenu>
          <LlamaSocialNetworks sx={{ marginBottom: '1rem' }}></LlamaSocialNetworks>
          <LlamaTelButton flexDirection="column"></LlamaTelButton>
        </Box>
      </Drawer>
    </>
  );
}



