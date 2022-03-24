import { fetchAPI } from '../../util/api';
import { mapLanguagesToUI } from '../shared/mappers';
import { mapEventsToUI } from './mappers';


export async function getServerSideProps() {
  const [events, languages ] = await Promise.all([
    fetchAPI('/events/', {
      populate: {
        Image: {
          fields: ['formats', 'url']
        }
      },
      fields: ['title', 'shortDescription'],
      sort: ['order', 'id']
    }),
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
      events: mapEventsToUI(events.data),
      languages: mapLanguagesToUI(languages.data),
    }
  }
}