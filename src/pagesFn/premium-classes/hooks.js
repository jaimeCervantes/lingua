import { useState, useEffect } from 'react';
import { fetchAPI } from 'util/api';
import { getDatesFromDaysOfWeek } from './functions';
import { mapSchedules } from './mappers';

export function useSchedulesCapacity(productId, availableSchedules) {
  const [state, setState] = useState([]);
  
  useEffect(() => {
    if (productId && availableSchedules?.length) {
      const paramsQuery = {
        filters: {
          productId: { $eq: productId },
          date: {
            $in: availableSchedules.reduce((prev, current) => {
              return [...prev, ...getDatesFromDaysOfWeek(current.daysOfWeek)];
            }, [])
          },
          time:  {
            $in: availableSchedules.map(item => `${item.startTimeUTC}:00.000`)
          }
        }
      };
      
      (async () => {
        const response = await fetchAPI('/schedules', paramsQuery);
        setState(mapSchedules(response.data));
      })();
    }
  }, [productId, availableSchedules]);

  return state;
}