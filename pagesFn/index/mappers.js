import { FormatSizeRounded } from '@mui/icons-material';
import { getStrapiMedia } from '../../util/media';

export function mapHomeImagesToUI(images = []) {
  return images.map(item => {
    const formats = item.attributes.Image?.data?.attributes?.formats;
    let url = '';
    
    if (formats && formats.length) {
      url = formats[item.attributes.size]?.url;
    }

    return {
      title: item.attributes.title,
      img: getStrapiMedia(url || item.attributes.Image.data.attributes.url)
    };
  });
}

export function mapToursToUI(tours = []) {
  return tours.map(item => ({ title: item.attributes.title }));
}