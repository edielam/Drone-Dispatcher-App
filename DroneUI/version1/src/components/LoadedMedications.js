import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const LoadedMedications = () => {
  const classes = useStyles();
  const [selectedDrone, setSelectedDrone] = useState('');
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    async function fetchMedications() {
      const res = await fetch(`/api/drones/${selectedDrone}/medications`);
      const data = await res.json();
      setMedications(data);
    }
    fetchMedications();
  }, [selectedDrone]);

  const handleChange = (event) => {
    setSelectedDrone(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="drone-select-label">Drone</InputLabel>
        <Select
          labelId="drone-select-label"
          id="drone-select"
          value={selectedDrone}
          onChange={handleChange}
        >
          <MenuItem value="drone1">Drone 1</MenuItem>
          <MenuItem value="drone2">Drone 2</MenuItem>
          <MenuItem value="drone3">Drone 3</MenuItem>
        </Select>
      </FormControl>
      {medications.length > 0 ? (
        <List component="nav" aria-label="medications">
          {medications.map((medication) => (
            <div key={medication.code}>
              <ListItem button>
                <ListItemText primary={medication.name} secondary={medication.weight} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      ) : (
        <p>No medications found for selected drone.</p>
      )}
    </div>
  );
};

export default LoadedMedications;
