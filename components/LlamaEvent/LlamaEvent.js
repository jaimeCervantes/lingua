import { useState } from "react";
import { Box, Typography, Slide, Button, CardActions, Paper } from "@mui/material";

export default function LlamaEvent({ event }) {
  const [trigger, setTrigger] = useState(false);

  /**
   *    '&:hover': {
          transform: 'translate3d(0px, -10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d'
        },
        '&:hover': {
          transform: 'translate3d(0px, -10px, 0px)',
          transformStyle: 'preserve-3d'
        },
        transition: 'transform 0.2s'
   */

  return (
    <Paper
      component="article"
      variant="elevation"
      sx={{
        overflow: "hidden",
        height: '400px',
        position: 'relative'
      }}
      onMouseEnter={() => setTrigger(true)}
      onMouseLeave={() => setTrigger(false)}
    >
      <img src={event.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt={event.title}/>
      <Box
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
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">{event.title}</Typography>
      </Box>
      <Slide in={trigger} timeout={500} direction="up">
        <Box
          sx={{
            position: "absolute",
            top: trigger ? 0 : "100%",
            left: 0,
            width: "100%",
            padding: "3rem",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">{event.title}</Typography>
          <Typography>
            {event.shortDescription}
          </Typography>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button color="primary">More details</Button>
          </CardActions>
        </Box>
      </Slide>
    </Paper>
  );
}
