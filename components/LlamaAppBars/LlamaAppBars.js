import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

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

      <ShowOnScrollAppBar />
    </>
  );
}

function ShowOnScrollAppBar() {
  const trigger = useScrollTrigger({ threshold: 105, disableHysteresis: true });

  return (
    <AppBar
      component="div"
      color="primary"
      position="fixed"
      sx={{
        top: trigger ? 0 : '-100px',
        opacity: trigger ? 0.7 : 0,
        transition: 'top 1s, opacity 1s',
        '&:hover': {
          opacity: 1
        }
      }}
    >
      <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        
        <LlamaLogo sx={{ width: '100px' }}></LlamaLogo>

        <LlamaMenu></LlamaMenu>
        
        <LlamaSocialNetworks sx={{ display: { xs: 'none', sm: 'block' } }}>
          <LlamaTelButton></LlamaTelButton>
        </LlamaSocialNetworks>
      </Toolbar>
    </AppBar>
  );
}

