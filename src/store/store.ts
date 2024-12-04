// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer, // Reducer from the userSlice
  },
});

// Type for dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
