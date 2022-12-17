// import React, { useEffect, useState } from "react";
// import DroneList from "./DroneList";
// import "../assets/style.css";

// const LoadedMedications = () => {
//   const [selectedDrone, setSelectedDrone] = useState(null);
//   const [medications, setMedications] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Fetch medications for the selected drone from the REST API endpoint
//     const fetchMedications = async () => {
//       if (selectedDrone) {
//         const response = await fetch(
//           `/api/drones/${selectedDrone.serialNumber}/medications`
//         );
//         const data = await response.json();
//         setMedications(data);
//       }
//       setIsLoading(false);
//     };
//     fetchMedications();
//   }, [selectedDrone]);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <div>
//       <h2>Loaded Medications</h2>
//       <DroneList
//         onDroneSelect={(drone) => setSelectedDrone(drone)}
//         selectedDrone={selectedDrone}
//       />
//       {selectedDrone ? (
//         <table className="medications">
//           <tbody>
//             {medications.map((medication) => (
//               <tr key={medication.code}>
//                 <td>{medication.name}</td>
//                 <td>{medication.code}</td>
//                 <td>{medication.weight}</td>
//                 <td>
//                   <img src={medication.image} alt={medication.name} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Select a drone to view its loaded medications.</p>
//       )}
//     </div>
//   );
//       };
// export default LoadedMedications;  

import React, { useEffect, useState } from 'react';
import "../assets/style.css";

const LoadedMedications = ({ droneId }) => {
  const [medications, setMedications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch medications for the specified drone from the REST API endpoint
    const fetchMedications = async () => {
      const response = await fetch(`/api/drones/${droneId}/medications`);
      const data = await response.json();
      setMedications(data);
      setIsLoading(false);
    };
    fetchMedications();
  }, [droneId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Loaded Medications</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Weight</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((medication) => (
            <tr key={medication.code}>
              <td>{medication.name}</td>
              <td>{medication.code}</td>
              <td>{medication.weight}</td>
              <td>
                <img src={medication.imageUrl} alt={medication.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoadedMedications;
