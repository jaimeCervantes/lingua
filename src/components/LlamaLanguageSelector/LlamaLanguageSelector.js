import { useState } from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function LlamaLanguagesSelector({ languages, value, setValue, sx }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Autocomplete
      data-testid="LlamaLanguageSelector"
      sx={{ width: { xs: '100%', sm: '50%', md: '300px' }, ...sx}}
      onChange={(event, newValue) => {
        if (newValue) {
          setValue(newValue);
        }
      }}
      inputValue={searchValue}
      onInputChange={(event, newInputValue) => {
        setSearchValue(newInputValue);
      }}
      options={languages}
      autoHighlight
      open={true}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          key={option.label}
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={
              option.img
                ? option.img
                : `https://flagcdn.com/w20/${option.flagCode.toLowerCase()}.png`
            }
            srcSet={
              option.img
                ? null
                : `https://flagcdn.com/w40/${option.flagCode.toLowerCase()}.png 2x`
            }
            alt={option.label}
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => {
        params.InputProps.startAdornment = <TravelExploreIcon />;

        return (
          <TextField
            {...params}
            label="Search target language"
            variant="filled"
            data-testid="LlamaLanguageSelector__TextField"
          />
        );
      }}
    />
  );
}
