import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  toolbar: {
    height: '64px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
  },
}));
