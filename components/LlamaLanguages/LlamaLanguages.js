import {
  Autocomplete,
  TextField,
  Box
} from "@mui/material";

import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import styles from './LlamaLanguages.module.css';
import { useEffect, useState } from "react";


export default function LlamaLanguages({ languages, isOpen, setIsOpen, value, setValue, sx = {} }) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if(isOpen) {
      setSearchValue('');
    }
  }, [isOpen, setSearchValue]);

  return (
    <Autocomplete
      id="language"
      disablePortal
      className={styles.container}
      sx={{...sx, height: isOpen ? 'auto' : '0px'}}
      freeSolo
      onChange={(event, newValue) => {
        if (newValue) {
          setValue(newValue);
          setIsOpen(false);
        }
      }}
      inputValue={searchValue}
      onInputChange={(event, newInputValue) => {
        setSearchValue(newInputValue);
      }}
      options={languages}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <a href={option.link} style={{ textDecoration: 'none', color: 'unset' }} key={option.label}>
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={option.img ? option.img : `https://flagcdn.com/w20/${option.flagCode.toLowerCase()}.png`}
              srcSet={option.img ? null : `https://flagcdn.com/w40/${option.flagCode.toLowerCase()}.png 2x`}
              alt={option.label}
            />
            {option.label}
          </Box>
        </a>
      )}
      open={isOpen}
      renderInput={(params) => {

        params.InputProps.startAdornment = (<TravelExploreIcon />)

        return (
          <TextField
            {...params}
            label="Search target language"
            variant="filled"
            sx={{ visibility: isOpen ? 'visible' : 'hidden' }}
            focused={isOpen}
          />
        )
      }}
    />
  );
}