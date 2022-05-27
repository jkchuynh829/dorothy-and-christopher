import { combineReducers } from '@reduxjs/toolkit';
import { guests } from './guests';
import { maintenanceMode } from './maintenanceMode';
import { rsvp } from './rsvp';

const rootReducer = combineReducers({
  guests,
  maintenanceMode,
  rsvp,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
