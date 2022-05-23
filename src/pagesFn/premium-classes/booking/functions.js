import { fetchAPI } from 'util/api';
import { getLanguages } from "pagesFn/shared/functions";
import { mapLanguagesToUI } from "pagesFn/shared/mappers";
import { calculateStartDateOfWeek } from './dateFunctions'

export async function getServerSideProps() {
  const languages = await getLanguages();

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}

export async function fetchSchedules(mappedEvents, productId) {
  try {
    const schedules = await fetchAPI('/schedules/find-or-create', undefined, {
      method: 'POST',
      body: JSON.stringify({
        data: { events: mappedEvents, productId }
      })
    });

    return schedules
  } catch(err) {
    console.log(err);
    return [];
  }
}

export function showSchedulesOfCurrentWeek(fromDate, direction, dispatch, matchedSchedules) {
  const startDate = calculateStartDateOfWeek(fromDate, direction);
  const id = startDate.toJSON().split('T')[0];
  
  if (matchedSchedules[id]) {
    dispatch({ type: 'updateFromDate', payload: startDate });
    return;
  }

  dispatch({ type: 'updateFromDate', payload: startDate });
  dispatch({ type: 'isRequestingSchedules', payload: true });
}