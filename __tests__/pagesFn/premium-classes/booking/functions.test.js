import {
  mapWeekRecurringEventsToEvents, 
  matchSchedulesWithEvents
} from 'pagesFn/premium-classes/booking/mappers';
import { fetchSchedules, calculateStartDateOfWeek } from 'pagesFn/premium-classes/booking/functions';
import recurringEvents from 'doubles/premium-classes/dummies/recurringEvents';
import schedules from 'doubles/premium-classes/dummies/schedules';
import mappedEvents from 'doubles/premium-classes/dummies/mappedEvents';
import { fetchAPI } from 'util/api';

jest.mock('util/api');

describe('Given a booking screen, showing current week in calendar', () => {
  const productId = 'prod_LWfophdX9tCsGv';
  
  
  describe('When a user wants to see available schedules', () => {
    it('Then the current week should be fill with events using recurring events', () => {
      const fromDate = new Date('2022-04-23');
      const events = mapWeekRecurringEventsToEvents(fromDate, recurringEvents,);

      expect(events).toEqual(mappedEvents);
    });

    it('Then capacity and available seats should be fetched using current week events', async () => {
      fetchAPI.mockResolvedValue({ data: schedules });
      const { data } = await fetchSchedules(mappedEvents, productId);

      expect(data[0].date).toEqual(mappedEvents[0].date);
      expect(data[0].time.replace(':00.000', '')).toEqual(mappedEvents[0].startTimeUTC);
    });

    it('Then capacity and available seats should be combined with current week events', () => {
      const availableSchedules = matchSchedulesWithEvents(schedules, mappedEvents, productId);

      const lastSchedule = availableSchedules[availableSchedules.length - 1];
      const lastEvent = mappedEvents[mappedEvents.length - 1];
      const scheduleTime = lastSchedule.time.replace(':00.000', '');
      expect(lastSchedule.date).toEqual(lastEvent.date);
      expect(scheduleTime).toEqual(lastEvent.startTimeUTC);
    });
  });

  describe('When a user wants to see he available schedules of the next week', () => {
    it('Then the fromDate should change to start fromt the next week', () => {
      const lastFromDate =  new Date('2022-04-23');;
      const startDate = calculateStartDateOfWeek(lastFromDate, 'next');

      const fromDate = startDate.toJSON().split('T')[0];
      expect(fromDate).toBe('2022-04-30');
    });
  });

  describe('When a user wants to see he available schedules of the previous week', () => {
    it('Then the fromDate should change to start from the previous week', () => {
      const lastFromDate =  new Date('2022-04-23');;
      const startDate = calculateStartDateOfWeek(lastFromDate, 'prev');

      const fromDate = startDate.toJSON().split('T')[0];
      expect(fromDate).toBe('2022-04-16');
    });
  });
});