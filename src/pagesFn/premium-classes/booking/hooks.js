import { useState, useEffect } from 'react';
import { fetchSchedules } from './functions';
import {
  mapWeekRecurringEventsToEvents,
  matchSchedulesWithEvents,
  mapSchedules
} from './mappers';

export function useMatchedSchedules(id, recurringEvents, isRequestingSchedules, fromDate) {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    if (isRequestingSchedules) {
      const mappedEvents = mapWeekRecurringEventsToEvents(fromDate, recurringEvents);
      
      (async () => {
        const response = await fetchSchedules(mappedEvents, id);
        const matched = matchSchedulesWithEvents(mapSchedules(response.data), mappedEvents, id);
        
        setMatches(matched);
      })();
    }
  }, [isRequestingSchedules]);

  return matches;
}