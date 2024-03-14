
import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography, Pagination } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';
import selectGenreorCategory from '../../features/currentGenreorCategory';
import Paginations from '../Pagination/Paginations';

const Movies = () => {
  // creating a data variable to store the data from the API
  const [page, setPage] = useState(1);
  const { currentGenreIDorCategoryName, searchQuery } = useSelector((state) => state.currentGenreorCategory);
  const lg=useMediaQuery((theme) =>theme.breakpoints.only('lg') );
  const numberOfMovies=lg?16:18;
  // console.log(currentGenreIDorCategoryName);
  const { data, error, isFetching } = useGetMoviesQuery({ currentGenreIDorCategoryName, page, searchQuery });
  // console.log(data);
  if (isFetching) { // for loading movies
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  // for no movies found
  if (!data.results.length) {
    <Box display="flex" justifyContent="center">
      <Typography variant="h5">No Movies Found
        <br />
        Please search for another movie
      </Typography>

    </Box>;
  }
  // for error handling
  if (error) return `An error has occurred: ${error.message}`;

  // console.log(data);

  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies}/>
      {/* Pagination block */}
      <Paginations currentPage={page} setPage={ setPage} totalPages={data.total_pages}/>
    </div>
  );
};

export default Movies;
