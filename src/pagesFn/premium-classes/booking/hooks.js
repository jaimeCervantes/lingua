import { useState, useEffect } from 'react';
import { fetchSchedules } from './functions';
import {
  mapWeekRecurringEventsToEvents,
  matchSchedulesWithEvents,
  mapSchedules
} from './mappers';

export function useMatchedSchedules(classId, classEvents) {
  const [mappedEvents, setMappedEvents] = useState([]);
  const [matchedScheduleEvents, setMatchedScheduleEvents] = useState([]);

  useEffect(() => {
    if (classEvents?.length) {
      setMappedEvents(mapWeekRecurringEventsToEvents(new Date(), classEvents));
    }
  }, [classEvents]);

  const availableSchedules = useSchedules(
    classId,
    mappedEvents
  );

  useEffect(() => {
    if (availableSchedules.length && mappedEvents.length) {
      const matched = matchSchedulesWithEvents(availableSchedules, mappedEvents, classId);
      setMatchedScheduleEvents(matched);
    }
  }, [availableSchedules, mappedEvents, classId]);


  return matchedScheduleEvents;
}

export function useSchedules(productId, mappedEvents) {
  const [schedules, setSchedules] = useState([]);
  
  useEffect(() => {
    if (productId?.length && mappedEvents?.length) {
      (async () => {
        const response = await fetchSchedules(mappedEvents, productId);
        setSchedules(mapSchedules(response.data));
      })();
    }
  }, [productId, mappedEvents]);

  return schedules
}