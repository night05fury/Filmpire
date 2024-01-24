import React from 'react';
import { Modal, Typography, Rating, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack, Celebration } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Axios } from 'axios';
import { useGetMovieQuery } from '../../services/TMDB';
import useStyles from './styles';
import GenreIcon from '../../assets/genres';
import { selectGenreorCategory } from '../../features/currentGenreorCategory';



const MovieInfo = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch(); // to send an action to the store
  const { data, isFetching, error } = useGetMovieQuery(id);
  console.log(data);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />


      </Box>
    );
  }
  if (error) {
    return (
      <Box>
        <Link to="/">Something has gone wrong</Link>
      </Box>
    );
  }
  return (
    <Grid container className={classes.containerSpace}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.moviePoster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}

        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align='center' gutterBottom>
          {data?.title} ({data.release_date.split()})
        </Typography>
        <Typography variant="h5" align='center' gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display='flex' align='center'>
            <Rating readOnly value={data.vote_average / 2} />
            <Typography variant='subtitle1' align='center' gutterBottom style={{ marginLeft: '1em' }}>
              {data?.vote_average}/10
            </Typography>

            <Typography variant='h6' align='center' gutterBottom style={{ marginLeft: '5em' }}>
              {data?.runtime}min {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : ''}
            </Typography>
          </Box>
        </Grid>
        <Grid item className={classes.genreContainer}>
          {data?.genres?.map((genre, i) => (
            <Link key={genre.name} className={classes.links} to="/" onClick={() => dispatch(selectGenreorCategory(genre.id))}>
              <img src={GenreIcon[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
              <Typography variant='subtitle1' color='textPrimary'>
                {genre?.name}

              </Typography>
            </Link>
          ))}
        </Grid >
      </Grid >
    </Grid >
  );

  return (
    <div>
      Movie Information1
    </div>
  );
};

export default MovieInfo;
