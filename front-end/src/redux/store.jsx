// app/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./LoginActiveBtnSlice";
import { movieAPI } from './MoviesSlice';
import { eventAPI } from './EventsSlice';
import { cinemaAPI } from './CinemasSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [movieAPI.reducerPath]: movieAPI.reducer,
    [eventAPI.reducerPath]: eventAPI.reducer,
    [cinemaAPI.reducerPath]: cinemaAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieAPI.middleware,
      eventAPI.middleware,
      cinemaAPI.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
