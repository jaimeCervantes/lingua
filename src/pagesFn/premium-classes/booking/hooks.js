import { useState, useEffect } from 'react';
import { fetchSchedules } from './functions';
import {
  mapWeekRecurringEventsToEvents,
  matchSchedulesWithEvents,
  mapSchedules
} from './mappers';

export function useMatchedSchedules(selectedPaidClass) {
  const [mappedEvents, setMappedEvents] = useState([]);
  const [matchedScheduleEvents, setMatchedScheduleEvents] = useState([]);

  useEffect(() => {
    if (selectedPaidClass?.availableSchedules?.length) {
      setMappedEvents(mapWeekRecurringEventsToEvents(new Date(), selectedPaidClass?.availableSchedules));
    }
  }, [selectedPaidClass?.availableSchedules]);

  const availableSchedules = useSchedules(
    selectedPaidClass?.id,
    mappedEvents
  );

  useEffect(() => {
    if (availableSchedules.length && mappedEvents.length) {
      const matched = matchSchedulesWithEvents(availableSchedules, mappedEvents, selectedPaidClass?.id);
      setMatchedScheduleEvents(matched);
    }
  }, [availableSchedules, mappedEvents, selectedPaidClass?.id]);


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