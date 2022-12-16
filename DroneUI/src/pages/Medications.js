import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';
import MedicationList from '../components/MedicationList';
import NewMedicationForm from '../components/NewMedicationForm';

function Medications() {
  const [medications, setMedications] = useState([]);
  const [selectedMedication, setSelectedMedication] = useState(null);

  useEffect(() => {
    axios
      .get('/api/medications')
      .then((response) => {
        setMedications(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSelectMedication = (medication) => {
    setSelectedMedication(medication);
  };

  const handleDeselectMedication = () => {
    setSelectedMedication(null);
  };

  const handleAddMedication = (newMedication) => {
    setMedications([...medications, newMedication]);
  };

  return (
    <div>
      <Navbar />
      <h1>Medications</h1>
      <Link to="/">Home</Link>
      {selectedMedication ? (
        <div>
          <h2>Selected Medication</h2>
          <p>Name: {selectedMedication.name}</p>
          <p>Dosage: {selectedMedication.dosage}</p>
          <button onClick={handleDeselectMedication}>Deselect Medication</button>
        </div>
      ) : (
        <div>
          <h2>Available Medications</h2>
          <MedicationList medications={medications} onSelect={handleSelectMedication} />
          <NewMedicationForm onAdd={handleAddMedication} />
        </div>
      )}
    </div>
  );
}

export default Medications;
