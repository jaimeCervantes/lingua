import { fetchAPI } from '../../util/api';
import { mapHomeImagesToUI, mapToursToUI } from './mappers';
import { mapLanguagesToUI } from '../shared/mappers';

export function getLayout(page) {
  return (
    <>
      {page}
    </>
  );
}

export async function getServerSideProps() {
  const [images, tours, index, languages ] = await Promise.all([
    fetchAPI('/home-images/', {
      populate: {
        Image: {
          fields: ['formats', 'url']
        }
      },
      fields: ['title', 'cols', 'rows', 'size'],
      sort: ['order', 'id']
    }),
    fetchAPI('/tours/', { fields: ['title'], sort: ['order', 'id'] }),
    fetchAPI('/index/'),
    fetchAPI('/languages/', {
      fields: ['name', 'countryFlagCode', 'link'],
      populate: {
        Image: {
          fields: ['url']
        }
      },
      sort: ['order', 'name']
    })
  ]);

  return {
    props: {
      homeImages: mapHomeImagesToUI(images.data),
      tours: mapToursToUI(tours.data),
      index: index.data.attributes,
      languages: mapLanguagesToUI(languages.data)
    }
  }
}