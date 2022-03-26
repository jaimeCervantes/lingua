import { Box, Chip, Avatar } from '@mui/material';

export default function LlamaChipLanguages({ languages }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "80%" },
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0 auto",
      }}
    >
      {languages.map((item) => {
        return (
          <Chip
            key={item.label}
            label={item.label}
            sx={{
              margin: "0.5rem 0.5rem",
              backgroundColor: "white",
              border: "1px solid #ccc",
            }}
            avatar={
              <Avatar
                loading="lazy"
                src={
                  item.img
                    ? item.img
                    : `https://flagcdn.com/w40/${item.flagCode.toLowerCase()}.png`
                }
                srcSet={
                  item.img
                    ? null
                    : `https://flagcdn.com/w80/${item.flagCode.toLowerCase()}.png 2x`
                }
                alt={item.label}
              />
            }
          ></Chip>
        );
      })}
    </Box>
  );
}