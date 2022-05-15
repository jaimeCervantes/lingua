import { Box, useTheme, useMediaQuery } from '@mui/material'
import LlamaPaidClass from './LlamaPaidClass';
import { useRouter } from 'next/router';

export default function LlamaPaidClassList({ classes, sx }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

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
      {classes.map((item) => {
        return (<LlamaPaidClass
          key={item.id}
          {...item}
          onBook={(info) => {
            sessionStorage.setItem(
              'selectedPaidClass',
              JSON.stringify(info)
            );
            router.push('/premium-classes/booking/');
          }}
          ></LlamaPaidClass>);
      })}
    </Box>
  );
}