import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DispatchInfo from "../components/DispatchInfo";
import "../assets/style.css";

const Dispatch = ({ match }) => {
  const [dispatch, setDispatch] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch dispatch details from the REST API endpoint
    const fetchDispatch = async () => {
      const response = await fetch(`/api/dispatch/${match.params.dispatchId}`);
      const data = await response.json();
      setDispatch(data);
      setIsLoading(false);
    };
    fetchDispatch();
  }, [match.params.dispatchId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <main className="dispatch">
        <h1>Dispatch</h1>
        <DispatchInfo dispatch={dispatch} />
      </main>
    </div>
  );
};

export default Dispatch;
