import { Paper } from "@mui/material"

export default function LlamaEmbeddedCalendar({ sx, src, styles }) {
  return (
    <Paper sx={{ backgroundColor: 'white', padding: { sx: 0, sm: '1rem' }, ...sx }}>
      <iframe
        style={{ width: '100%', height: '70vh', display: 'block', ...styles }}
        
        src={src}
        frameBorder="0"
        scrolling="no"
      >  
      </iframe>
    </Paper>
  );
}