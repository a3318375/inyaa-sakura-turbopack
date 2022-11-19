import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import demoReducer, {initDemoState} from './reducer';

export type StateType = {demo: typeof initDemoState};

export const initState: StateType = {
  demo: initDemoState,
};
// toolkit将大大简化创建store的操作,默认集成了thunk，immutable
const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  preloadedState: initState,
  devTools: true
});
export default store;
