import { getStrapiMedia } from '../../util/media';

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