import React from 'react'
import { Typography, Button } from '@mui/material'
import useStyle from './styles';




const Paginations = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyle();
 
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  if (totalPages === 0) {
    return null;
  }
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