import { useState, useEffect } from 'react';
import Stripe from 'stripe';
import { fetchAPI } from 'util/api';
import { getYearMonthDatePart } from 'components/LlamaClasses/functions';
import { mapSchedulesCapacity } from './mappers';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: process.env.STRIPE_API_VERSION
});

export async function getClasses() {
  return await stripe.products.list();
}


export function useSchedulesCapacity(productId, availableSchedules) {
  const [state, setState] = useState([]);
  
  useEffect(() => {
    if (productId && availableSchedules?.length) {
      const date = new Date();
      const paramsQuery = {
        filters: {
          productId: { $eq: productId },
          date: {
            $in: availableSchedules.reduce((prev, current) => {
              return [...prev, ...getDatesFromDaysOfWeek(current.daysOfWeek)];
            }, [])
          },
          time:  {
            $in: availableSchedules.map(item => `${item.startTimeUTC}:00.000`)
          }
        }
      };
      
      (async () => {
        const response = await fetchAPI('/schedules', paramsQuery);
        setState(mapSchedulesCapacity(response.data));
      })();
    }
  }, [productId, availableSchedules]);

  return state;
}

const milisecondsDay = 1000 * 60 * 60 * 24;

function getDatesFromDaysOfWeek(daysOfWeek) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  return daysOfWeek.map(day => getDateFromDay(day, currentDay, currentDate));
}

function getDateFromDay(day, currentDay, currentDate) {
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

export function findSchedule(schedules, extendedProps, rangeDates) {
  const { startTimeUTC, timeZoneOffset } = extendedProps;
  const { start, end } = rangeDates; 

  const startDate = getYearMonthDatePart(start);

  const schedule = schedules.find(schedule => {
    if (schedule.time === `${startTimeUTC}:00.000` && schedule.date === startDate) {
      return true;
    }

    return false;
  });

  return schedule;
}

export function matchSchedulesWithRecurringEvents(schedules, recurringEvents) {

}

export function transformRecurringEventsToNormalEvents(recurringEvents) {
  recurringEvents.reduce((prev, currentEvent) => {
    return [...prev, ]
  }, []);
}
