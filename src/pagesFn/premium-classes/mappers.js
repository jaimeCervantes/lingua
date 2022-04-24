import { getDateFromDay } from './functions';

export function mapClassesToUI(classes) {
  return classes.map(item => {
    const schedules = item.metadata?.schedules  || '[]';

    return {
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.images ? item.images[0] : '',
      price: item.metadata?.price || '',
      priceId: item.metadata?.priceId || '',
      language: item.metadata?.language || '',
      flagCode: item.metadata?.flagCode || '',
      schedules:  JSON.parse(schedules)
    }
  })
}

export function mapSchedules(data) {
  return data.map(schedule => ({
    id: schedule.id,
    availableSeats: schedule.attributes.availableSeats,
    capacity: schedule.attributes.capacity,
    date: schedule.attributes.date,
    productId: schedule.attributes.productId,
    time: schedule.attributes.time,
    timeZoneOffset: schedule.attributes.timeZoneOffset
  }));
}

export function mapWeekRecurringEventsToEvents(fromDate, recurringEvents) {
  return recurringEvents.reduce((prev, currentEvent) => {
    return [
      ...prev,
      ...currentEvent.daysOfWeek.map(day => mapRecurringEventToNormalEvent(currentEvent, day, fromDate))
    ]
  }, []);
}

function mapRecurringEventToNormalEvent(event, day, fromDate) {
  const currentDate = fromDate || new Date();
  const currentDay = currentDate.getDay();
  const currentEvent = { ...event };

  delete currentEvent.daysOfWeek;
  delete currentEvent.repeats;

  const dateStr = getDateFromDay(day, currentDay, currentDate);

  return {
    ...currentEvent,
    startStr: `${dateStr}T${event.startTimeUTC}:00-04:00`,
    endStr: `${dateStr}T${event.endTimeUTC}:00-04:00`,
    date: dateStr
  };
}

export function matchSchedulesWithEvents(schedules, events, productId) {
  return events.map(event => {
    const schedule = schedules.find(schedule => {
      if (hasMatchedScheduleWithEvent(schedule, event, productId)) {
        return true;
      }

      return false;
    });
    
    return { ...event, ...schedule };
  });
}

function hasMatchedScheduleWithEvent(schedule, event, productId) {
  const scheduleTime = schedule.time.replace(':00.000','');

  if (
      schedule.date === event.date
      && scheduleTime === event.startTimeUTC
      && schedule.productId === productId
  ) {
    return true;
  }

  return false;
}