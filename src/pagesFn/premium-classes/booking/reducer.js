export default function reduceBooking(state = {}, action = {}) {
  switch (action.type) {
    case 'updateSelectedSchedule':
      return { ...state, selectedSchedule: action.payload };
    case 'updateMatchedSchedules':
      return {
        ...state,
        matchedSchedules: [ ...state.matchedSchedules, ...action.payload ],
      };
    case 'isRequestingSchedules':
      return {
        ...state,
        isRequestingSchedules: action.payload
      };
    default:
      return state;
  }
}