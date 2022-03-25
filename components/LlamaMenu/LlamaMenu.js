import { Box } from '@mui/material';
import Link from 'next/link';
import LlamaButton from '../Buttons/LlamaButton';

const menuItems = [
  {
    text: 'Home',
    url: '/home',
  },
  {
    text: 'Events',
    url: '/events'
  },
  {
    text: 'About',
    url: '/about'
  },
  {
    text: 'Teachers',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdtQNJImrlq2U0n22hyybwK4nvHF4O3zLdw1eazF0qf7sKaBA/viewform',
    isOut: true
  }
];

export default function LlamaMenu({ color }) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: {  md: '1rem' } }}>
      {menuItems.map((item) => (
        <Link href={item.url}  passHref={item.isOut} key={item.url}>
          <LlamaButton target={item.isOut ? '_blank' : '_self'}>
            {item.text}
          </LlamaButton>
        </Link>
      ))}
    </Box>
  );
}