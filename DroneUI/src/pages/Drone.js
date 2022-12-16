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
