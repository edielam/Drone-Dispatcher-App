import React from 'react';

function DroneList({ drones, onSelect }) {
  return (
    <ul>
      {drones.map((drone) => (
        <li key={drone.serialNumber} onClick={() => onSelect(drone)}>
          {drone.serialNumber}
        </li>
      ))}
    </ul>
  );
}

export default DroneList;
