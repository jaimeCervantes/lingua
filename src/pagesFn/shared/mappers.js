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

export function mapEventsToUI(events) {
  return events.map(item => {
    const formats = item.attributes.Image.data.attributes.formats;
    const url = formats['small']?.url;

    return {
      title: item.attributes.title,
      img: getStrapiMedia(url || item.attributes.Image.data.attributes.url),
      shortDescription: item.attributes.shortDescription,
    };
  });
}