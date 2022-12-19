import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DroneList from '../components/DroneList';
import LoadedMedications from '../components/LoadedMedications';
import NewMedicationForm from '../components/NewMedicationForm';
import "../assets/style.css";

const Medications = () => {
  const [selectedDrone, setSelectedDrone] = useState(null);

  const handleDroneSelection = (drone) => {
    setSelectedDrone(drone);
  };

  return (
    <div>
      <div className="main-content">
        <h1>Medications</h1>
        <DroneList
          filter={{ status: "UNAVAILABLE" }}
          onDroneSelection={handleDroneSelection}
        />
        {selectedDrone && (
          <>
            {selectedDrone.status === "AVAILABLE" && (
              <NewMedicationForm droneId={selectedDrone.id} />
            )}
            <LoadedMedications droneId={selectedDrone.id} />
          </>
        )}
      </div>
    </div>
  );
};

export default Medications;
