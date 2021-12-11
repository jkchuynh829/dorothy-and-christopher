import { combineReducers } from '@reduxjs/toolkit';
import { test } from './test';

const rootReducer = combineReducers({
  test,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
