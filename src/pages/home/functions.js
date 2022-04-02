import { getLanguages, getEvents } from 'pagesFn/shared/functions';
import { mapLanguagesToUI, mapEventsToUI } from 'pagesFn/shared/mappers';

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