import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';
import DroneList from '../components/DroneList';
import NewDroneForm from '../components/NewDroneForm';

function Drones() {
  const [drones, setDrones] = useState([]);
  const [selectedDrone, setSelectedDrone] = useState(null);

  useEffect(() => {
    axios
      .get('/api/drones')
      .then((response) => {
        setDrones(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSelectDrone = (drone) => {
    setSelectedDrone(drone);
  };

  const handleDeselectDrone = () => {
    setSelectedDrone(null);
  };

  const handleAddDrone = (newDrone) => {
    setDrones([...drones, newDrone]);
  };

  return (
    <div>
      <Navbar />
      <h1>Drones</h1>
      <Link to="/">Home</Link>
      {selectedDrone ? (
        <div>
          <h2>Selected Drone</h2>
          <p>Serial Number: {selectedDrone.serialNumber}</p>
          <p>State: {selectedDrone.state}</p>
          <button onClick={handleDeselectDrone}>Deselect Drone</button>
        </div>
      ) : (
        <div>
          <h2>Available Drones</h2>
          <DroneList drones={drones} onSelect={handleSelectDrone} />
          <NewDroneForm onAdd={handleAddDrone} />
        </div>
      )}
    </div>
  );
}

export default Drones;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Button from '@material-ui/core/Button';
// import DroneList from '../components/DroneList';
// import NewDroneForm from '../components/NewDroneForm';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const Drones = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="drone" src="/assets/drone.png" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Drones
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className={classes.button}
//                 startIcon={<AddIcon />}
//               >
//                 Add Drone
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//       <DroneList />
//       <NewDroneForm />
//     </div>
//   );
// };

// export default Drones;

