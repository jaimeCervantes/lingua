import { useState, useEffect } from 'react';
import { fetchSchedules } from './functions';

export function useMatchedSchedules(id, mappedEvents, isRequestingSchedules, mapper) {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    if (isRequestingSchedules && mappedEvents.length) {
      (async () => {
        const response = await fetchSchedules(mappedEvents, id);
        const matched = mapper(response.data, mappedEvents, id);
        
        setMatches(matched);
      })();
    }
  }, [isRequestingSchedules, mappedEvents]);

  return matches;
}

export function useFetchClassPrices(id, mapper) {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (id) {
      (async () => {
        const response = await fetch(`/api/prices/search?id=${id}`);
        if (response.ok) {
          const json = await response.json();
          setPrices(mapper(json));
        }
      })();
    }
  }, [id]);

  return prices
}