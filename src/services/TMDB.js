import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// This is using th process.env to hide the API key from the public
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const page = 1;
export const tmdbApi = createApi({

  reducerPath: 'tmdbApi',
  // This is the base url[https://api.themoviedb.org/3/movie/popular] for the API from https://developer.themoviedb.org/docs
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // * Get movies by [TYPE] e.g. popular, top_rated, now_playing, upcoming
    // This is the endpoint for the movies
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,

} = tmdbApi;
