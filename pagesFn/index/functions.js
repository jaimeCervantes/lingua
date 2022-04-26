import { fetchAPI } from '../../util/api';
import { getLanguages } from '../shared/functions';
import { mapHomeImagesToUI, mapToursToUI } from './mappers';
import { mapLanguagesToUI } from '../shared/mappers';
import LlamaPlacementTestButton from '../../components/Buttons/LlamaPlacementTestButton'

export function getLayout(page) {
  return (
    <>
      {page}
      <LlamaPlacementTestButton></LlamaPlacementTestButton>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const [images, tours, index, languages ] = await Promise.all([
    fetchAPI('/home-images/', {
      populate: {
        Image: {
          fields: ['formats', 'url']
        }
      },
      fields: ['title', 'size'],
      sort: ['order', 'id']
    }),
    fetchAPI('/tours/', { fields: ['title'], sort: ['order', 'id'] }),
    fetchAPI('/index/'),
    getLanguages()
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