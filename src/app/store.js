import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import carReducer from '../features/car/CarSlice'
import toggleReducer from '../features/toggle/toggleSlice'
import chatReducer from '../features/chat/toggleChatSlice'
import carouselReducer from '../features/carousel/toggleCarouselSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    car: carReducer,
    toggle: toggleReducer,
    chat: chatReducer,
    carousel: carouselReducer
  },

});
