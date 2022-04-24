import Stripe from 'stripe';
import { getYearMonthDatePart } from 'components/LlamaClasses/functions';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: process.env.STRIPE_API_VERSION
});

export async function getClasses() {
  return await stripe.products.list();
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
