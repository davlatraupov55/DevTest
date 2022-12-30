import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './redux'

export const store = configureStore({
  reducer: {
    Todo: TodoSlice
  }
});