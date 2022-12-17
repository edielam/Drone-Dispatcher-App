import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    margin: theme.spacing(2, 0),
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  table: {
    width: '80%',
    borderCollapse: 'collapse',
  },
  medications: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
  },
}));

