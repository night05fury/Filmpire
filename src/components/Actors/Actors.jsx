import { Box, Typography, CircularProgress, Grid,Button } from '@mui/material';
import React from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { useGetActorDetailsQuery } from '../../services/TMDB';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { ArrowBack } from '@mui/icons-material';



const Actors = () => {
  const { id }=useParams();
  const classes = useStyles();
  const history=useHistory();




  const {data, isFetching, error} = useGetActorDetailsQuery(id);
  console.log(id);
  console.log(data);
  
  
  if (isFetching)
  {
    return(
      <Box display='flex' justifyContent='center' justify>
        <CircularProgress size='8rem'/>
      </Box>
    );
  }
  if(error)
  {
    return(
      <Box>
        <Link to="/">Something has gone wrong</Link>
        <Button startIcon={<ArrowBack/>} onClick={()=>history.goBack()} color='primary'></Button>
      </Box>
    );
  }

return(

  <Grid  container spacing={3} >
      <Grid item lg={5} xl={4} >
        <img className={classes.image}
        src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
        alt={data?.name}
        />
      </Grid>
  </Grid>
);



};

export default Actors;
