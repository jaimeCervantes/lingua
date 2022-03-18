import { getStrapiMedia } from '../../util/media';

export function mapHomeImagesToUI(images) {
  return images.map(item => {
    const formats = item.attributes.Image.data.attributes.formats;
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

export function mapLanguagesToUI(languages) {
  return languages.map(item => {
    const img = item.attributes.Image.data?.attributes.url;

    return {
      label: item.attributes.name,
      flagCode: item.attributes.countryFlagCode,
      link: item.attributes.link,
      img: img ? getStrapiMedia(img) : null
    }
  });
}