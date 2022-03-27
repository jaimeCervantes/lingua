import { getLanguages, getEvents } from '../shared/functions';
import { mapLanguagesToUI } from '../shared/mappers';
import { mapEventsToUI } from './mappers';


export async function getStaticProps() {
  const [events, languages ] = await Promise.all([
    getEvents(),
    getLanguages()
  ]);

  return {
    props: {
      events: mapEventsToUI(events.data),
      languages: mapLanguagesToUI(languages.data),
    }
  }
}