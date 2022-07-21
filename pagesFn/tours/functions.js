import { fetchAPI } from '../../util/api';
import { getLanguages } from '../shared/functions';
import { mapToursToUI } from './mappers';
import { mapLanguagesToUI } from '../shared/mappers';


export async function getStaticProps() {
  const [tours, languages] = await Promise.all([
      fetchAPI('/tours/', { fields: ['title', 'description'], sort: ['order', 'id'] }),
      getLanguages()
    ]);

  return {
    props: {
      tours: mapToursToUI(tours.data),
      languages: mapLanguagesToUI(languages.data),
    }
  }
}