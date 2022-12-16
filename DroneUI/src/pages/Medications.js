import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';
import LoadedMedications from '../components/LoadedMedications';
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
          <LoadedMedications medications={medications} onSelect={handleSelectMedication} />
          <NewMedicationForm onAdd={handleAddMedication} />
        </div>
      )}
    </div>
  );
}

export default Medications;

// import React from 'react';
// import NewMedicationForm from '../components/NewMedicationForm';
// import LoadedMedications from '../components/LoadedMedications';

// const Medications = () => {
//   return (
//     <div>
//       <NewMedicationForm />
//       <LoadedMedications />
//     </div>
//   );
// };

// Note that this implementation assumes that the NewMedicationForm and 
// LoadedMedications components have been implemented as described in the 
// previous answers.

// The Medications page will display a form for uploading details of new 
// medications and a list of the medications that are currently loaded onto 
// drones. The NewMedicationForm component will handle creating a new 
// medication by making a POST request to the API, and the LoadedMedications 
// component will handle displaying the list of medications by making a GET 
// request to the API.

// export default Medications;
