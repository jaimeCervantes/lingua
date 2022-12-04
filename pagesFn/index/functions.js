import { fetchAPI } from '../../util/api';
import { getLanguages } from '../shared/functions';
import { mapHomeImagesToUI } from './mappers';
import { mapLanguagesToUI } from '../shared/mappers';

export async function getStaticProps(ctx) {
  let results = []
  try {
    results = await Promise.all([
      fetchAPI('/home-images/', {
        populate: {
          Image: {
            fields: ['formats', 'url']
          }
        },
        fields: ['title', 'size'],
        sort: ['order', 'id']
      }),
      fetchAPI('/index/'),
      getLanguages()
    ]);
  } catch(err) {
    console.error(err);
  }

  const [images, index, languages ]  = results;

  return {
    props: {
      homeImages: mapHomeImagesToUI(images?.data),
      index: index ? index.data?.attributes : {},
      languages: mapLanguagesToUI(languages?.data)
    }
  }
}