import React from 'react'
import { Typography, Button } from '@mui/material'
import useStyle from './styles';




const Paginations = () => {
  const classes = useStyle();
  const currentPage = 1;
  const handlePrev =()=>{

  };
  const handleNext =()=>{

  };

  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} className={classes.Button} variant='contained' color='primary' type='button' >Prev</Button>
      <Typography className={classes.pageNumber} variant='h4'>
        {currentPage}
      </Typography>
      <Button onClick={handleNext} className={classes.Button} variant='contained' color='primary' type='button' >Next</Button>

    </div>
  )
}

export default Paginations