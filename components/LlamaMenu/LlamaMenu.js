import { Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LlamaButton from '../Buttons/LlamaButton';

const menuItems = [
  {
    text: 'Home',
    url: '/home',
  },
  {
    text: 'Events',
    url: '/events',
    isOut: false
  },
  {
    text: 'About',
    url: '/about'
  },
  {
    text: 'Tours',
    url: '/tours'
  },
  {
    text: 'Student account',
    url: '/student-account'
  },
  {
    text: 'Booking',
    url: 'https://linguallama.as.me/',
    isOut: true
  },
  {
    text: 'Join our team',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe1nXK4UCVgf9gpOYk52vVMBdEiUQh0qcEqgH_gvWkWsetOVg/viewform',
    isOut: true
  },
  {
    text: 'Classes',
    url: 'https://linguallama-store.mailchimpsites.com/',
    isOut: true
  },
  {
    text: 'Reviews',
    url: 'https://disboard.org/server/reviews/762367346890768394',
    isOut: true
  },
  {
    text: 'Join here',
    url: 'https://linguallama-academy.mn.co/share/ZrlA98LrWWkL97PT?utm_source=manual',
    isOut: true
  },
];

export default function LlamaMenu({ sx, onClick }) {
  const router = useRouter();

  return (
    <Box
      sx={sx}
    >
      {menuItems.map((item) => (
        <Link href={item.url} passHref={true} key={item.url} legacyBehavior>
          <LlamaButton
            sx={{ color: sx.color }}
            target={item.isOut ? '_blank' : '_self'}
            onClick={onClick}
            current={router.pathname === item.url ? true : false}>
            {item.text}
          </LlamaButton>
        </Link>
      ))}
    </Box>
  );
}