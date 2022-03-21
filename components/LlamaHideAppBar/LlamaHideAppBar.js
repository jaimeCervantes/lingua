import { Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import LlamaAppBar from '../LlamaAppBar/LlamaAppBar';

export default function LlamaHideAppBar(props) {
  return (
    <>
      <LlamaAppBar appBarProps={{ position: 'relative', color: 'primary', elevation: 1 }}></LlamaAppBar>


      <ShowOnScroll {...props}>
        <LlamaAppBar
          appBarProps={{
            color: 'primary',
          }}
          
          logoSize={{ xs: '70px', sm: '100px'}}
          menuFontSize={'1.2rem'}
        ></LlamaAppBar>
      </ShowOnScroll>
    </>
  );
}

function ShowOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

