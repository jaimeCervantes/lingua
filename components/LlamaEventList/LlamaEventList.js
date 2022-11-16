import { useTheme, useMediaQuery, Box, Button, CardActions, } from "@mui/material"
import Link from "next/link";
import LlamaEvent from "../LlamaEvent/LlamaEvent";

export default function LlamaEventList({ events }) {
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));
  let repeat = 3;

  if (isLessMd) {
    repeat = 2;
  }

  if (isLessSm) {
    repeat = 1;
  }

  return (
    <Box
      sx={{ marginBottom: '1rem' }}
      display="grid" gridTemplateColumns={`repeat(${repeat}, 1fr)`} gap={Math.max(repeat, 2)}
    >
      {events.map((item) => {
        return (
          <LlamaEvent
            event={item}
            key={item.img}
            renderActions={
              <CardActions sx={{ justifyContent: "center" }}>
                {
                  item.link ? <Button
                      color="secondary"
                      variant="contained"
                      href={item.link}
                      target="_blank"
                    >
                      More details
                    </Button>
                  : <Link href="/events#calendars" passHref={true} legacyBehavior>
                    <Button
                      color="secondary"
                      variant="contained"
                    >
                      More details
                    </Button>
                  </Link>
                }
              </CardActions>
            }
          />
        );

      })}
    </Box>
  );
}