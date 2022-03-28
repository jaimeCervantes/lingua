import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages";
import LlamaEventList from "../components/LlamaEventList/LlamaEventList";
import LlamaIllustration from "../components/LlamaIllustration/LlamaIllustration";

export { getStaticProps } from "../pagesFn/home/functions.js";

export default function Home({ events, languages }) {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-evenly', alignItems: { xs: 'center', sm: 'space-evenly' } }}>
      <img
          src="/illustrations/welcome.svg"
          style={{
            display: 'block',
            minWidth: '100px',
            maxWidth: '500px',
            marginTop: '-6%',
          }}
        />
        
        <iframe
          style={{ display: 'flex', width: '400px', minHeight: '350px' }}
          src="https://www.youtube.com/embed/Blae7m30CNs"
          title="Welcome to LinguaLlama"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          frameborder="0"
          >
        </iframe>
      </Box>
      

      <Typography variant="h2" sx={{ paddingTop: 0 }}>Current Events</Typography>

      <LlamaEventList events={events}></LlamaEventList>

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </>
  );
}
