export const initialState = {
  matchedSchedules: {
  },
  currentWeekDates: [],
  selectedSchedule: {},
  selectedPaidClass: {},
  isRequestingSchedules: false,
  fromDate: new Date()
};

export function createInitState(initialState) {
  return {
    ...initialState, 
    selectedPaidClass: parseSelectedPaidClass(initialState)
  };
}

function parseSelectedPaidClass() {
  try {
    return JSON.parse(sessionStorage.getItem('selectedPaidClass'));
  } catch(err) {
    console.warn('selectedPaiClass cannot be parsed');
    return {};
  }
}

