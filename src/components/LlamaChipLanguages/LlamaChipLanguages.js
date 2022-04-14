import { Box, Chip, Avatar } from '@mui/material';

export default function LlamaChipLanguages({ languages, sx }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "80%" },
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0 auto",
        ...sx
      }}
    >
      {languages.map((item) => <LlamaChipLanguage key={item.label} {...item}></LlamaChipLanguage>)}
    </Box>
  );
}


export function LlamaChipLanguage(props) {
  
  return (
    <Chip
      label={props.label}
      sx={{
        margin: "0.5rem 0.5rem",
        backgroundColor: "white",
        border: "1px solid #ccc",
        ...props.sx
      }}
      avatar={
        <Avatar
          loading="lazy"
          src={
            props.img
              ? props.img
              : `https://flagcdn.com/w40/${props.flagCode?.toLowerCase()}.png`
          }
          srcSet={
            props.img
              ? null
              : `https://flagcdn.com/w80/${props.flagCode?.toLowerCase()}.png 2x`
          }
          alt={props.label}
        />
      }
    ></Chip>
  );
}