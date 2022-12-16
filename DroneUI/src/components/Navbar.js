import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button color="inherit">
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/drones" className={classes.link}>
              Drones
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/medications" className={classes.link}>
              Medications
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/dispatch" className={classes.link}>
              Dispatch
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/settings" className={classes.link}>
              Settings
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
