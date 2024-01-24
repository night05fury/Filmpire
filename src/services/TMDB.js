import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// This is using th process.env to hide the API key from the public
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// const page = 1;
export const tmdbApi = createApi({

  reducerPath: 'tmdbApi',
  // This is the base url[https://api.themoviedb.org/3/movie/popular] for the API from https://developer.themoviedb.org/docs
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // * Get movies by [TYPE] e.g. popular, top_rated, now_playing, upcoming
    
      //* Getting the Genre for the sidebar
      getGenres: builder.query({
        query: () => `genre/movie/list?api_key=${API_KEY}&language=en-US`,
      }) 
    // This is the endpoint for the movies
    getMovies: builder.query({
      query: ({ currentGenreIDorCategoryName, page, searchQuery }) => {
        //* Get Movie by Search Query
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${API_KEY}`;
        }

        // * Get Movie by Categories e.g. Top rated , Popular, Now Playing, Upcoming
        if (currentGenreIDorCategoryName && typeof currentGenreIDorCategoryName === 'string') {
          return `movie/${currentGenreIDorCategoryName}?page=${page}&api_key=${API_KEY}`;
        }
        if (currentGenreIDorCategoryName && typeof currentGenreIDorCategoryName === 'number') {
          return `discover/movie?with_genres=${currentGenreIDorCategoryName}&page=${page}&api_key=${API_KEY}`;
        }
        // Get Popular Movies Default
        return `movie/popular?page=${page}&api_key=${API_KEY}`;
      },
    }), // end of query
  

    //* Getting the Movie informations like Videos , Ratings, credits, actors ,etc.
    getMovies: builder.query({
      query:(id)=>`/movie/${id}?append_to_response=videos,credits&api_key=$P{API_KEY}`,
    }) 
  }),
});

export const {
  useGetMoviesQuery, useGetGenresQuery,

} = tmdbApi;
