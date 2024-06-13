// import { configureStore } from '@reduxjs/toolkit';
// // import basketSlice from './basketSlice';
// import movieSlice from './MoviesSlice.jsx';
// import eventsSlice from './EventsSlice.jsx';


// const  store = configureStore({
//     reducer:{
//         // basket:basketSlice,
//       movies: movieSlice,
//       events: eventsSlice
//     }
// })

 
// export default store

import { configureStore } from "@reduxjs/toolkit";
import { movieAPI } from './MoviesSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
    reducer: {
        [movieAPI.reducerPath]: movieAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieAPI.middleware),
});

setupListeners(store.dispatch)
export default store