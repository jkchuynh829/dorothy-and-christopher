import { combineReducers } from '@reduxjs/toolkit';
import { maintenanceMode } from './maintenanceMode';

const rootReducer = combineReducers({
  maintenanceMode,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
