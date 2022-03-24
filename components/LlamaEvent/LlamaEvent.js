import { useState } from "react";
import { Box, Typography, Button, CardActions, Paper, Fade } from "@mui/material";
import { alpha } from '@mui/material/styles';

export default function LlamaEvent({ event }) {
  const [trigger, setTrigger] = useState(false);

  return (
    <Paper
      component="article"
      variant="elevation"

      sx={{
        overflow: "hidden",
        height: '400px',
        position: 'relative',
        '&:hover': {
          transform: 'translate3d(0px, -10px, 0px)',
          transformStyle: 'preserve-3d'
        },
        transition: 'transform 0.5s',
        '&:hover .title': {
          opacity: 0
        }
      }}
      

      onMouseEnter={() => setTrigger(true)}
      onMouseLeave={() => setTrigger(false)}
    >
      <img src={event.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt={event.title}/>
      <Box
        className="title"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "1rem",
          backgroundColor: { xs: 'rgba(0, 0, 0, 0.5)', sm: "black" },
          color: "white",
          display: 'flex',
          justifyContent: 'space-between',
          transition: 'opacity 0s'
        }}
      >
        <Typography variant="h6">{event.title}</Typography>
      </Box>
      <Fade in={trigger} timeout={500} direction="up">
        <Box
          sx={{
            position: "absolute",
            top: trigger ? 0 : "100%",
            left: 0,
            width: "100%",
            padding: "3rem",
            height: "100%",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.8),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: 'white'
          }}
        >
          <Typography className="tittle" variant="h4">{event.title}</Typography>
          <Typography>
            {event.shortDescription}
          </Typography>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button color="secondary" variant="contained">More details</Button>
          </CardActions>
        </Box>
      </Fade>
    </Paper>
  );
}
