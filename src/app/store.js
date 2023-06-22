import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';

export default configureStore({
//   in this section we will add all the reducers e.g. Genres and categories of Movies
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
