import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesConatiner: {
    marginTop: '5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    // for smaller screens
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));
