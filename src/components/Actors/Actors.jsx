import { Box, Typography, CircularProgress, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { useGetActorDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { ArrowBack } from '@mui/icons-material';
import { MovieList, Movies, Paginations } from '..';


const Actors = () => {
  const  { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const [page,setPage] = useState(1);
  
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const { data:recommendation } = useGetMoviesByActorIdQuery(id);



  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center' justify>
        <CircularProgress size='8rem' />
      </Box>
    );
  }
  if (error) {
    return (
      <Box>
        <Link to="/">Something has gone wrong</Link>
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color='primary'></Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3} >
        {/* Actor's image is displayed here */}
        <Grid item lg={5} xl={4} >
          <img className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        {/* Actor's information is displayed here */}
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant='h2' gutterBottom>
            {data?.name}
          </Typography>
          {/* actors' Date of Birth */}
          <Typography variant='h5' gutterBottom>
            Born:{new Date(data?.birthday).toDateString()}
          </Typography>

          {/* About the actor  */}
          <Typography variant='body1' align='justify' paragraph>
            {data?.biography || 'Sorry, No biography available'}
          </Typography>
          <Box marginTop='2rem' display='flex' justifyContent='space-around'>
            <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
            <Button startIcon={<ArrowBack />} color='primary' onClick={() => history.goBack()}>Back</Button>
          </Box>
        </Grid>
      </Grid>
      {/* Movies Recommendation based on the actor */}
      <Box margin='2rem 0' width='100%'>
        <Typography variant='h2' gutterBottom align='center'>
          Movies
        </Typography>
        {/* Loop through the recommended movies */}
        {recommendation && 
          <MovieList movies={recommendation} numberOfMovies={12} />
          }
          
      </Box>
      <Paginations />
    </>
  );



};

export default Actors;
