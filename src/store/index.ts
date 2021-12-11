import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  useSelector as useUntypedSelector,
  TypedUseSelectorHook,
  useDispatch,
} from 'react-redux';

import rootReducer from './reducers';
import type { RootState } from './reducers';

export function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: [...getDefaultMiddleware()],
  });

  if (module.hot) {
    module.hot.accept('./index', () => store.replaceReducer(rootReducer));
  }
  return store;
}

export const useSelector: TypedUseSelectorHook<RootState> = useUntypedSelector;

const store = configureAppStore();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
