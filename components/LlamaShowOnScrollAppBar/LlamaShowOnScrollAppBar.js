import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import LlamaLogo from "../LlamaLogo/LlamaLogo";
import LlamaMenu from "../LlamaMenu/LlamaMenu";
import LlamaSocialNetworks from '../LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from '../LlamaTelButton/LlamaTelButton';

export default function LlamaShowOnScrollAppBar(props) {
  const { children, scrollTrigerProps, opacity, sx, ...rest } = props;
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
      sx={ 
        sx ? sx(trigger) : ({
            backgroundColor: trigger ? 'white' : 'transparent',
            opacity: trigger ? '0.7' : 1,
            transition: `background-color 1s, opacity 1s`,
            '&:hover': {
              opacity: 1
            }
          })
        }
      {...rest}
    >
      <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        
        {
          children || <>
            <LlamaLogo></LlamaLogo>
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