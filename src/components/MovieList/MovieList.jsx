import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    // Using the Grid Template for displaying the Movies
    <Grid container className={classes.moviesConatiner}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
