import { fetchAPI } from '../api';

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return fetchAPI(new Date(action.payload.date));
    default:
      return state;
  }
};
