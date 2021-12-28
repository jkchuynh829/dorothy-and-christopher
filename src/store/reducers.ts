import { combineReducers } from '@reduxjs/toolkit';
import { guests } from './guests';
import { maintenanceMode } from './maintenanceMode';

const rootReducer = combineReducers({
  guests,
  maintenanceMode,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
