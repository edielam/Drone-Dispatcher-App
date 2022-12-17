import React, { useEffect, useState } from "react";
import "../assets/style.css";

const DroneList = () => {
  const [drones, setDrones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch drones from the REST API endpoint
    const fetchDrones = async () => {
      const response = await fetch("/api/drones");
      const data = await response.json();
      setDrones(data);
      setIsLoading(false);
    };
    fetchDrones();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Battery Capacity</th>
          <th>Status</th>
          <th>Model</th>
        </tr>
      </thead>
      <tbody>
        {drones.map((drone) => (
          <tr key={drone.serialNumber}>
            <td>{drone.serialNumber}</td>
            <td>{drone.batteryCapacity}</td>
            <td>{drone.status}</td>
            <td>{drone.model}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DroneList;
