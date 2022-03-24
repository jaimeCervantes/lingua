import { getStrapiMedia } from '../../util/media';

export function mapHomeImagesToUI(images) {
  return images.map(item => {
    const formats = item.attributes.Image?.data.attributes.formats;
    const url = formats[item.attributes.size]?.url;

    return {
      title: item.attributes.title,
      img: getStrapiMedia(url || item.attributes.Image.data.attributes.url),
      cols: item.attributes.cols,
      rows: item.attributes.rows
    };
  });
}

export function mapToursToUI(tours) {
  return tours.map(item => ({ title: item.attributes.title }));
}