import { useState } from "react";
import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";
import LlamaLanguagesSelector from "components/LlamaLanguageSelector/LlamaLanguageSelector";
import LlamaTeacherList from "../../components/LlamaTeacherList/LlamaTeacherList";

export default function PremiumClasses({ languages }) {
  const [selectedLanguage, setSelectedLanguage ] = useState(() => languages[0])
  
  return (
    <Box data-testid="premium-classes-content">
      <Box sx={{ marginBottom: '2rem' }}>
        <LlamaLanguagesSelector
          languages={languages}
          value={selectedLanguage}
          setValue={setSelectedLanguage}
        ></LlamaLanguagesSelector>
      </Box>

      <LlamaTeacherList teachers={[
        {
          name: 'Jaime Cervantes',
          avatar: 'https://res.cloudinary.com/jaime-lingua/image/upload/v1648078261/small_free_spanish_classes_1000_6e6adaf4a4.jpg',
          slug: '/premium-classes/booking',
          languages: [{ label: 'English', flagCode: 'us', img: null }],
          intro: 'Hello I am jaime and and I like avocado',
          scheduleAvailable: [{ date: '04-29-2022', time: '08:00 00' }],
          price: '15.00'
        },
        {
          name: 'Miguel Savedra',
          avatar: 'https://res.cloudinary.com/jaime-lingua/image/upload/v1648175630/small_friendly_dabate_1000_3a6ccd0461.jpg',
          slug: '/premium-classes/booking',
          languages: [{ label: 'Spanish', flagCode: 'es', img: null }],
          intro: 'Hello I am Miguel Savedra and I like apples',
          scheduleAvailable: [{ date: '04-22-2022', time: '08:00 00' }],
          price: '20.00'
        },
        {
          name: 'Jaime Cervantes',
          slug: '/premium-classes/booking',
          avatar: 'https://res.cloudinary.com/jaime-lingua/image/upload/v1648078261/small_free_spanish_classes_1000_6e6adaf4a4.jpg',
          slug: 'jaime-cervantes',
          languages: [{ label: 'English', flagCode: 'us', img: null }],
          intro: 'Hello I am jaime and and I like avocado',
          scheduleAvailable: [{ date: '04-29-2022', time: '08:00 00' }],
          price: '15.00'
        },
        {
          name: 'Miguel Savedra',
          avatar: 'https://res.cloudinary.com/jaime-lingua/image/upload/v1648175630/small_friendly_dabate_1000_3a6ccd0461.jpg',
          slug: '/premium-classes/booking',
          languages: [{ label: 'Spanish', flagCode: 'es', img: null }],
          intro: 'Hello I am Miguel Savedra and I like apples',
          scheduleAvailable: [{ date: '04-22-2022', time: '08:00 00' }],
          price: '20.00'
        }
      ]}></LlamaTeacherList>

      <Typography variant="h2">Languages</Typography>

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </Box>
  );
}

export async function getStaticProps() {
  const languages = await getLanguages();
  // const teachers = await getClasses();

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}
