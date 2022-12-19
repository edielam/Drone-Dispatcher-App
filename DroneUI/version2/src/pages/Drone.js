import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DroneList from "../components/DroneList";
import NewDroneForm from "../components/NewDroneForm";
import "../assets/style.css";

const Drones = () => {
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
    <div>
      <main className="main-content">
        <h1>Drones</h1>
        <DroneList />
        <NewDroneForm />
      </main>
    </div>
  );
};

export default Drones;
