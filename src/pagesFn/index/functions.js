import { fetchAPI } from 'util/api';
import { getLanguages } from 'pagesFn/shared/functions';
import { mapHomeImagesToUI, mapToursToUI } from './mappers';
import { mapLanguagesToUI } from 'pagesFn/shared/mappers';
import LlamaPlacementTestButton from 'components/Buttons/LlamaPlacementTestButton';
import LLamaHeader from 'components/LlamaHeader/LlamaHeader';

export function getLayout(page) {
  return (
    <>
      <LLamaHeader></LLamaHeader>
      {page}
      <LlamaPlacementTestButton></LlamaPlacementTestButton>
    </>
  );
}

export async function getStaticProps(ctx) {
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