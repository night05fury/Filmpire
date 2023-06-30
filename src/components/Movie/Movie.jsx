import React from 'react';
import { Grid, Grow, Tooltip, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  console.log(movie, i);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 400}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          {movie.poster_path
            ? (<img alt={movie.title} className={classes.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />)
            : (<img alt={movie.title} className={classes.image} src="https://fillmurray.com/200/300" />)}
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average}/10`}>
            <div className={classes.Rating}>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
