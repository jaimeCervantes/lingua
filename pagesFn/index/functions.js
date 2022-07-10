import { fetchAPI } from '../../util/api';
import { mapHomeImagesToUI } from './mappers';

export async function getStaticProps(ctx) {
  const [images, index ] = await Promise.all([
    fetchAPI('/home-images/', {
      populate: {
        Image: {
          fields: ['formats', 'url']
        }
      },
      fields: ['title', 'size'],
      sort: ['order', 'id']
    }),
    fetchAPI('/index/')
  ]);

  return {
    props: {
      homeImages: mapHomeImagesToUI(images.data),
      index: index.data.attributes,
    }
  }
}