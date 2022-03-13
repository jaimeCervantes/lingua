import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './LlamaImageList.module.css';

export default function LlamaImageList({ images }) {
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ImageList
      variant="quilted"
      cols={isLessSm ? 2 : 4}
    >
      {images.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}
          sx={{ overflow: 'hidden' }}
        >
          <img
            src={item.img}
            alt={item.title}
            className={styles.img}
          />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
        </ImageListItem>
      ))}
    </ImageList>
  );
}