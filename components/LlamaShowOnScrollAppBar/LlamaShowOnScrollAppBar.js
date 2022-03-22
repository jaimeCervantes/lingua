import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import LlamaLogo from "../LlamaLogo/LlamaLogo";
import LlamaMenu from "../LlamaMenu/LlamaMenu";
import LlamaSocialNetworks from '../LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from '../LlamaTelButton/LlamaTelButton';

export default function LlamaShowOnScrollAppBar(props) {
  const { children, scrollTrigerProps, opacity, ...rest } = props;
  const trigger = useScrollTrigger({
    threshold: 105,
    disableHysteresis: true,
    ...scrollTrigerProps 
  });

  return (
    <AppBar
      component="div"
      color="primary"
      position="fixed"
      sx={{
        top: trigger ? 0 : '-100px',
        opacity: trigger ? opacity : 0,
        transition: `top ${ trigger ? '0.5s' : 0}, opacity  ${trigger ? '0.5s' : 0}`,
        '&:hover': {
          opacity: 1
        }
      }}
      {...rest}
    >
      <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        
        {
          children || <>
            <LlamaLogo sx={{ width: '100px' }}></LlamaLogo>
            <LlamaMenu></LlamaMenu>
            
            <LlamaSocialNetworks sx={{ display: { xs: 'none', sm: 'block' } }}>
              <LlamaTelButton></LlamaTelButton>
            </LlamaSocialNetworks>
          </>
        }
      </Toolbar>
    </AppBar>
  );
}