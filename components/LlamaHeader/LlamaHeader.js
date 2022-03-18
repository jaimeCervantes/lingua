import { AppBar, Typography } from "@mui/material";

export default function LLamaHeader() {
  return (
    <AppBar color="secondary">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        English
      </Typography>
    </AppBar>
  );
}