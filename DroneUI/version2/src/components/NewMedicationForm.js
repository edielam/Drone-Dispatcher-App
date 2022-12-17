// import React, { useState } from "react";
// import "../assets/style.css";

// const NewMedicationForm = ({ onSubmit }) => {
//   const [name, setName] = useState("");
//   const [code, setCode] = useState("");
//   const [weight, setWeight] = useState("");
//   const [image, setImage] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validate form inputs
//     if (name === "" || code === "" || weight === "") {
//       // Display an error message
//       return;
//     }

//     // Call the onSubmit callback with the new medication data
//     onSubmit({ name, code, weight, image });

//     // Reset form inputs
//     setName("");
//     setCode("");
//     setWeight("");
//     setImage("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="new-medication-form">
//       <h2>Add New Medication</h2>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="code">Code:</label>
//         <input
//           type="text"
//           id="code"
//           value={code}
//           onChange={(event) => setCode(event.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="weight">Weight:</label>
//         <input
//           type="number"
//           id="weight"
//           value={weight}
//           onChange={(event) => setWeight(event.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="image">ImageURL:</label>
//         <input
//           type="text"
//           id="image"
//           value={image}
//           onChange={(event) => setWeight(event.target.value)}
//           className="form-control"
//         />
//       </div>
//   </form>
//   );
// }

import React, { useState } from 'react';
import "../assets/style.css";

const NewMedicationForm = ({ droneId }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [weight, setWeight] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the new medication information to the REST API endpoint
    fetch(`/api/drones/${droneId}/medications`, {
      method: "POST",
      body: JSON.stringify({ name, code, weight, imageUrl }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add medication");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // Clear the form fields
    setName("");
    setCode("");
    setWeight("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="code">Code:</label>
      <input
        type="text"
        id="code"
        value={code}
        onChange={(event) => setCode(event.target.value)}
        required
      />
      <label htmlFor="weight">Weight:</label>
      <input
        type="text"
        id="weight"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
        required
      />
      <label htmlFor="image-url">Image URL:</label>
      <input
        type="text"
        id="image-url"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Medication
      </button>
    </form>
  );
  }  
  export default NewMedicationForm;