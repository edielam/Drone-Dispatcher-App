import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {useStyles} from '../assets/styles'

function HomePage() {
  const classes = useStyles();
  const [drones, setDrones] = useState([]);
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    axios
      .get('/api/drones')
      .then((response) => {
        setDrones(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get('/api/medications')
      .then((response) => {
        setMedications(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let numIdle = 0;
  let numLoading = 0;
  let numLoaded = 0;
  let numDelivering = 0;
  let numDelivered = 0;
  let numReturning = 0;

  if (drones) {
    numIdle = drones.filter((drone) => drone.state === 'IDLE').length;
    numLoading = drones.filter((drone) => drone.state === 'LOADING').length;
    numLoaded = drones.filter((drone) => drone.state === 'LOADED').length;
    numDelivering = drones.filter((drone) => drone.state === 'DELIVERING').length;
    numDelivered = drones.filter((drone) => drone.state === 'DELIVERED').length;
    numReturning = drones.filter((drone) => drone.state === 'RETURNING').length;
  }

  return (
    <div className={classes.root}>
      <h1>Welcome to the Drone Dispatch Service</h1>
      <div className={classes.stats}>
        <div className={classes.stat}>
          <h2>{numIdle}</h2>
          <p>Idle Drones</p>
        </div>
        <div className={classes.stat}>
          <h2>{numLoading}</h2>
          <p>Loading Drones</p>
        </div>
        <div className={classes.stat}>
          <h2>{numLoaded}</h2>
          <p>Loaded Drones</p>
        </div>
        <div className={classes.stat}>
          <h2>{numDelivering}</h2>
          <p>Delivering Drones</p>
        </div>
        <div className={classes.stat}>
          <h2>{numDelivered}</h2>
          <p>Delivered Drones</p>
        </div>
        <div className={classes.stat}>
          <h2>{numReturning}</h2>
          <p>Returning Drones</p>
        </div>
      </div>
      <h2>Upcoming Dispatch and Return Times:</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Drone</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {drones &&
            drones.map((drone) => (
              <tr key={drone.serialNumber}>
                <td>{drone.serialNumber}</td>
                <td>{drone.departureTime}</td>
                <td>{drone.arrivalTime}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2>Loaded Medications:</h2>
      <ul className={classes.medications}>
        {medications &&
          medications.map((medication) => (
            <li key={medication.code}>
              <img src={medication.image} alt={medication.name} />
              <p>
                {medication.name} ({medication.weight} grams)
              </p>
            </li>
          ))}
      </ul>
      <div className={classes.buttons}>
        <Link to="/drones" className={classes.button}>
          View Drones
        </Link>
        <Link to="/medications" className={classes.button}>
          View Medications
        </Link>
        <Link to="/dispatch" className={classes.button}>
          View Dispatch Info
        </Link>
      </div>
    </div>
  );
}  

export default HomePage;