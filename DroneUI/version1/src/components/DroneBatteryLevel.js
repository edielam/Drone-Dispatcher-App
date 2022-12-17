import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const DroneBatteryLevel = () => {
  const classes = useStyles();
  const [selectedDrone, setSelectedDrone] = useState('');
  const [batteryLevel, setBatteryLevel] = useState('');

  useEffect(() => {
    async function fetchBatteryLevel() {
      const res = await fetch(`/api/drones/${selectedDrone}/battery`);
      const data = await res.json();
      setBatteryLevel(data.batteryLevel);
    }
    fetchBatteryLevel();
  }, [selectedDrone]);

  const handleChange = (event) => {
    setSelectedDrone(event.target.value);
  };

  return (
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
      {batteryLevel ? <p>Battery level: {batteryLevel}%</p> : <p>No battery level found for selected drone.</p>}
    </FormControl>
  );
};

export default DroneBatteryLevel;
