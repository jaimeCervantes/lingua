import { Typography, Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages.js";

export { getStaticProps } from '../pagesFn/tours/functions';

export default function Tours({ tours, languages }) {
  return (
    <>
      <Typography variant="h2" id="tours">Tours</Typography>

      <TableContainer>
        <Table>
          <TableBody>
            {tours.map((item) => (
              <TableRow
                key={item.title}
              >
                <TableCell sx={{ color: 'white' }}>{item.title}</TableCell>
                <TableCell sx={{ color: 'white' }}>{item.description}</TableCell>
                <TableCell align="right">
                  <Button href="https://forms.gle/VWNWgBArYZS9yZLb9" target="__blank" sx={{ marginInlineEnd: '1rem'}}>RSVP</Button>    
                  <Button color="primary" variant="contained" href="https://linguallama-store.mailchimpsites.com/" target="__blank">Buy Tickets</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h2">Languages</Typography>

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </>
  );
}