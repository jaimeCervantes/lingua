import { Box, useTheme, useMediaQuery } from '@mui/material'
import LlamaPaidClass from './LlamaPaidClass';

export default function LlamaPaidClassList({ classes, sx }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      data-testid="LlamaPaidClassList"
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${isLessMd ? 1 : 2}, 1fr)`,
        gap: 2,
        ...sx
      }}
    >
      {classes.map((item) =>(<LlamaPaidClass key={item.id} {...item}></LlamaPaidClass>))}
    </Box>
  );
}