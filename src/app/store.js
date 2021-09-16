import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import carReducer from '../features/car/CarSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    car: carReducer
  },

});
