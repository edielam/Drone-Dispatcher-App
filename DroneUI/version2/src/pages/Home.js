import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/style.css";

const Home = () => {
  const [drones, setDrones] = useState([]);
  const [medications, setMedications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch drones and medications from the REST API endpoint
    const fetchData = async () => {
      const droneResponse = await fetch("/api/drones");
      const droneData = await droneResponse.json();
      setDrones(droneData);

      const medicationResponse = await fetch("/api/medications");
      const medicationData = await medicationResponse.json();
      setMedications(medicationData);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <main className="home">
        <h1>Welcome to the Drone Dispatch App</h1>
        <section>
          <h2>Current Status</h2>
          <p>
            There are currently {drones.length} drones registered in the system.
          </p>
          <p>
            There are {medications.length} medications available for dispatch.
          </p>
        </section>
        <section>
          <h2>Important Alerts</h2>
          <ul className="alerts">
            <li className="alert alert-warning">
              Drone with serial number XYZ123 has a low battery level.
            </li>
            <li className="alert alert-danger">
              Drone with serial number ABC456 has experienced a delivery failure.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
