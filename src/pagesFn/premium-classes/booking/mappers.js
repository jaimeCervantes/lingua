import { getDateFromDay } from './functions';

export function mapSchedules(data) {
  return data.map(schedule => ({
    id: schedule.id,
    availableSeats: schedule.attributes.availableSeats,
    capacity: schedule.attributes.capacity,
    date: schedule.attributes.date,
    productId: schedule.attributes.productId,
    time: schedule.attributes.time,
    timezoneOffset: schedule.attributes.timezoneOffset
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
  delete currentEvent.startTime;
  delete currentEvent.endTime;

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

    const start = new Date(`${schedule.date}T${event.startTimeUTC}${schedule.timezoneOffset}`);
    const end = new Date(`${schedule.date}T${event.endTimeUTC}${schedule.timezoneOffset}`);
    const availableSeats = schedule.availableSeats;
    const isSelectable = canBeSelected(start, availableSeats);

    return {
      ...event,
      ...schedule,
      start,
      end,
      classNames: isSelectable ? ['llama-fc-available'] : ['llama-fc-not-available'],
      title: isSelectable ? 'Available' : 'Not available',
      isSelectable: isSelectable
    };
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

function canBeSelected(start, availableSeats) {
  if (availableSeats === 0) {
    return false;
  }

  if (start < new Date()) {
    return false;
  }

  return true;
}