import { getStrapiMedia } from 'util/media';

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