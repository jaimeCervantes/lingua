import { fetchAPI } from 'util/api';
import { getYearMonthDatePart } from 'components/LlamaClasses/functions';

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
