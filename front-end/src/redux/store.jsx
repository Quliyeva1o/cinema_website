import { configureStore } from '@reduxjs/toolkit';
// import basketSlice from './basketSlice';
import movieSlice from './MoviesSlice.jsx';


const  store = configureStore({
    reducer:{
        // basket:basketSlice,
      movies: movieSlice
    }
})

 
export default store