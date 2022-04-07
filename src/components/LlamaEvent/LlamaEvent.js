import { useState } from "react";
import { Box, Typography, Paper, Fade } from "@mui/material";
import { alpha } from '@mui/material/styles';
import { useMediaQuery, useTheme } from "@mui/material";

export default function LlamaEvent({ event, renderActions }) {
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [trigger, setTrigger] = useState(() => isLessSm ? true : false);
  const timeAnimation = 0.5;

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
        transition: `transform ${timeAnimation}s`,
        '&:hover .title': {
          opacity: 0
        },
        padding: 0
      }}
      
      onMouseEnter={() => setTrigger(true)}
      onMouseLeave={() => setTrigger(false)}
    >
      <img src={event.img}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        alt={event.title}
        loading="lazy"
      />
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
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'space-between',
          transition: `opacity ${timeAnimation}s`
        }}
      >
        <Typography variant="h6" sx={{ fontSize: '1rem' }}>{event.title}</Typography>
      </Box>
      <Fade in={trigger || isLessSm} timeout={timeAnimation * 1000} direction="up">
        <Box
          sx={{
            position: "absolute",
            top: { xs: 'unset', sm: trigger ? 0 : "100%" },
            bottom: { xs: 0, sm: 'unset' },
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
          <Typography variant="h4">{event.title}</Typography>
          <Typography>
            {event.shortDescription}
          </Typography>
          {renderActions}
        </Box>
      </Fade>
    </Paper>
  );
}
