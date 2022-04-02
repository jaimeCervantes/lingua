import { getLanguages, getEvents } from 'pagesFn/shared/functions';
import { mapLanguagesToUI } from 'pagesFn/shared/mappers';
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