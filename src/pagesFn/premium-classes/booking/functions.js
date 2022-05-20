import { fetchAPI } from 'util/api';
import { getYearMonthDatePart } from 'components/LlamaClasses/functions';
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";

export async function getServerSideProps() {
  const languages = await getLanguages();

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}

const milisecondsDay = 1000 * 60 * 60 * 24;

export function getDatesFromDaysOfWeek(daysOfWeek) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  return daysOfWeek.map(day => getDateFromDay(day, currentDay, currentDate));
}

export function getDateFromDay(day, currentDay, currentDate) {
  if (day === currentDay) {
    return getYearMonthDatePart(currentDate);
  }

  if (day > currentDay) {
    const diff = day - currentDay; // get days left in the same week
    const datePlusDiff = currentDate.getTime() + milisecondsDay * diff
    const date = new Date(datePlusDiff);
    
    return getYearMonthDatePart(date);
  }

  if (day < currentDay) {
    const diff = currentDay - day;
    const rest =  7 - diff; // get the day in the future week date
    const datePlusDiff = currentDate.getTime() + milisecondsDay * rest;
    const date = new Date(datePlusDiff);

    return getYearMonthDatePart(date);
  }
}

export async function fetchSchedules(mappedEvents, productId) {
  try {
    const schedules = await fetchAPI('/schedules/find-or-create', undefined, {
      body: JSON.stringify({
        data: { events: mappedEvents, productId }
      }),
      method: 'POST'
    });

    return schedules
  } catch(e) {
    console.log(e);
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

export function calculateStartDateOfWeek(lastFromDate, direction) {
  let startTime = 0;
  if (direction === 'next') {
    startTime = lastFromDate.getTime() + 7 * milisecondsDay;
  }

  if (direction === 'prev') {
    startTime = lastFromDate.getTime() - 7 * milisecondsDay;
  }
  
  return new Date(startTime);
}
