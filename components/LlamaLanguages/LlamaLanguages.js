import {
  Autocomplete,
  TextField,
  Box
} from "@mui/material";

import styles from './LlamaLanguages.module.css';


export default function LlamaLanguages({ languages, isOpen, setIsOpen, value, setValue }) {



  return (
    <Autocomplete
      id="language"
      className={styles.container}
      sx={{height: isOpen ? 'auto' : '0px'}}
      freeSolo
      onChange={(event, newValue) => {
        if (newValue) {
          setValue(newValue);
          setIsOpen(false);
        }
      }}
      options={languages}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <a href={option.link} style={{ textDecoration: 'none', color: 'unset' }} key={option.code}>
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label}
          </Box>
        </a>
      )}
      open={isOpen}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Search target language"
            variant="filled"
            sx={{ visibility: isOpen ? 'visible' : 'hidden' }}
          />
        )
      }}
    />
  );
}