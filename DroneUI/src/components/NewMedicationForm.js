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

const NewMedicationForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [code, setCode] = useState('');
  const [image, setImage] = useState('');
  const [selectedDrone, setSelectedDrone] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, weight, code, image };
    const res = await fetch(`/api/drones/${selectedDrone}/medications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      history.push('/medications');
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <TextField
        label="Weight"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
        required
      />
      <TextField
        label="Code"
        value={code}
        onChange={(event) => setCode(event.target.value)}
        required
      />
      <TextField
        label="Image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="drone-select-label">Drone</InputLabel>
        <Select
          labelId="drone-select-label"
          id="drone-select"
          value={selectedDrone}
          onChange={(event) => setSelectedDrone(event.target.value)}
          required
        >
          <MenuItem value="drone1">Drone 1</MenuItem>
          <MenuItem value="drone2">Drone 2</MenuItem>
          <MenuItem value="drone3">Drone 3</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.button} type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
  
  }
  
  export default NewMedicationForm;
