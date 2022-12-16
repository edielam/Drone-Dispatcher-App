import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const NewDroneForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [serialNumber, setSerialNumber] = useState('');
  const [model, setModel] = useState('');
  const [weightLimit, setWeightLimit] = useState('');
  const [batteryCapacity, setBatteryCapacity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { serialNumber, model, weightLimit, batteryCapacity };
    const res = await fetch('/api/drones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      history.push('/drones');
    }
  };

  
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Serial Number"
        value={serialNumber}
        onChange={(event) => setSerialNumber(event.target.value)}
      />
      <TextField
        label="Model"
        value={model}
        onChange={(event) => setModel(event.target.value)}
      />
      <TextField
        label="Weight Limit"
        value={weightLimit}
        onChange={(event) => setWeightLimit(event.target.value)}
      />
      <TextField
        label="Battery Capacity"
        value={batteryCapacity}
        onChange={(event) => setBatteryCapacity(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Register Drone
      </Button>
    </form>
  );
};

export default NewDroneForm;
