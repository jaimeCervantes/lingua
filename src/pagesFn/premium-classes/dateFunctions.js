export function createMiniCalendarMaxTime() {
  const date = new Date();
  let currentHour = date.getHours() + 5;

  return `${padZero(currentHour)}:00:00`;
}

function padZero(number) {
  return (`0${number}`).slice(-2);
}

export function createDateTimesFromSchedules(schedules) {
  if (!schedules?.length) {
    return [];
  }

  return schedules.map(item => {
    if (item.repeats) {
      // at the moment April 22, 2022, schedules are only recurring events
      return createTimesForRecurringEvents(item)
    }
    
    const date = new Date(`${item.date}T${item.time}${item.timezoneOffset || '-04:00'}`);
    return {
      editable: false,
      start: date,
      end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1)
    }
  });
}

function createTimesForRecurringEvents(item) {
  const yearMonthDay = getYearMonthDatePart(new Date());

  const offsetTimeStart = new Date(`${yearMonthDay}T${item.startTime}${item.timezoneOffset || '-04:00'}`);
  const offsetTimeEnd = new Date(`${yearMonthDay}T${item.endTime}${item.timezoneOffset || '-04:00'}`);
  
  const startTime = `${padZero(offsetTimeStart.getHours())}:${padZero(offsetTimeStart.getMinutes())}`;
  const endTime = `${padZero(offsetTimeEnd.getHours())}:${padZero(offsetTimeEnd.getMinutes())}`;

  return { ...item, startTimeUTC: item.startTime, endTimeUTC: item.endTime, startTime, endTime };
}

export function getYearMonthDatePart(date) {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const dayOfMonth = padZero(date.getDate());
  
  return `${year}-${month}-${dayOfMonth}`;
}