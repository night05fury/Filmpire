
import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';
import selectGenreorCategory from '../../features/currentGenreorCategory';

const Movies = () => {
  // creating a data variable to store the data from the API
  const [page, setPage] = useState(1);
  const { currentGenreIDorCategoryName } = useSelector((state) => state.currentGenreorCategory);

  //console.log(currentGenreIDorCategoryName);
  const { data, error, isFetching } = useGetMoviesQuery({ currentGenreIDorCategoryName, page });
//console.log(data);
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

  console.log(data);

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
