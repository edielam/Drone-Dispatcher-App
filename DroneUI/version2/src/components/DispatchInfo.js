import React, { useEffect, useState } from "react";
import "../assets/style.css";

const DispatchInfo = ({ dispatchId }) => {
  const [dispatch, setDispatch] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch dispatch details from the REST API endpoint
    const fetchDispatch = async () => {
      const response = await fetch(`/api/dispatch/${dispatchId}`);
      const data = await response.json();
      setDispatch(data);
      setIsLoading(false);
    };
    fetchDispatch();
  }, [dispatchId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div >
      <h2>Dispatch Info</h2>
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{dispatch.id}</td>
          </tr>
          <tr>
            <td>Drone Serial Number:</td>
            <td>{dispatch.droneSerialNumber}</td>
          </tr>
          <tr>
            <td>Expected Return Time:</td>
            <td>{dispatch.expectedReturnTime}</td>
          </tr>
          <tr>
            <td>Delivery Address:</td>
            <td>{dispatch.deliveryAddress}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  };
  export default DispatchInfo;  