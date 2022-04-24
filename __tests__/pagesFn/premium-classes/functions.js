import { mapWeekRecurringEventsToEvents, matchSchedulesWithEvents } from 'pagesFn/premium-classes/mappers';
import recurringEvents from 'doubles/premium-classes/dummies/recurringEvents';
import schedules from 'doubles/premium-classes/dummies/schedules';
import mappedEvents from 'doubles/premium-classes/dummies/events'

describe('Given a booking screen, showing until 7 days of recurring events', () => {
  describe('When a user wants to see available schedules', () => {
    it('Then the current week should be fill with events using recurring events', () => {
      const events = mapWeekRecurringEventsToEvents(new Date('2022-04-23'), recurringEvents,);

      expect(events).toEqual(mappedEvents);
    });

    it.skip('Then capacity and available seats should be fetched using current week events', () => {
      const schedules = fetchSchedules(events);

      expect(schedules[0].date).toEqual(events[0].date);
      expect(schedules[0].time.replace(':00.000', '')).toEqual(events[0].startTimeUTC);
    });

    it('Then capacity and available seats should be combined with current week events', () => {
      const productId = schedules[0].productId;

      const availableSchedules = matchSchedulesWithEvents(schedules, mappedEvents, productId);

      const lastSchedule = availableSchedules[availableSchedules.length - 1];
      const lastEvent = mappedEvents[mappedEvents.length - 1];
      const scheduleTime = lastSchedule.time.replace(':00.000', '');
      expect(lastSchedule.date).toEqual(lastEvent.date);
      expect(scheduleTime).toEqual(lastEvent.startTimeUTC);
    });
  });

  describe.skip('When a user wants to see the next week available schedules', () => {
    it('Then the next week should be fill with events using recurring events', () => {

    });

    it('Then capacity and available seats should be fetched using next week events', () => {

    });

    it('Then capacity and available seats should be combined with current week events', () => {

    });
  })
});