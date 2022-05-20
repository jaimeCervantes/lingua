export default function reduceBooking(state = {}, action = {}) {
  const { type, payload } = action;
  
  switch (type) {
    case 'updateSelectedSchedule':
      return { ...state, selectedSchedule: payload };
    case 'updateMatchedSchedules':
      return {
        ...state,
        matchedSchedules: {
          ...state.matchedSchedules,
          [state.fromDate.toJSON().split('T')[0]]: payload
        },
      };
    case 'isRequestingSchedules':
      return { ...state, isRequestingSchedules: payload };
    case 'updateFromDate':
      return { ...state, fromDate: payload };
    default:
      return state;
  }
}