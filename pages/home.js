import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages";
import LlamaEventList from "../components/LlamaEventList/LlamaEventList";

export { getStaticProps } from "../pagesFn/home/functions.js";

export default function Home({ events, languages }) {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-evenly', alignItems: { xs: 'center', sm: 'space-evenly' } }}>
       <picture>
          <source srcSet="/illustrations/welcome.svg" type="image/svg" />
          <img
            src="/illustrations/welcome.svg"
            style={{
              display: 'block',
              minWidth: '100px',
              maxWidth: '500px',
              marginTop: '-6%',
            }}
            alt="Welcome image"
          />
        </picture>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: 300, sm: 400 }, minHeight: '350px'}}>
        <iframe
          style={{ display: 'block', width: '100%', minHeight: '350px' }}
          src="https://www.youtube.com/embed/Blae7m30CNs?rel=0"
          title="Welcome to LinguaLlama"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          >
        </iframe>
        </Box>
      </Box>

      <Typography variant="h2" sx={{ paddingTop: 0 }}>Current Events</Typography>
      <LlamaEventList events={events}></LlamaEventList>
      
      <Typography variant="h2">Languages</Typography>
      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </>
  );
}
