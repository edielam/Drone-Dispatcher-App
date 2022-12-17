import React, { useState } from "react";
import "../assets/style.css";

const NewDroneForm = () => {
  const [formData, setFormData] = useState({
    serialNumber: "",
    batteryCapacity: "",
    model: "",
  });
  const [formError, setFormError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(null);

    // Validate form data
    if (!formData.serialNumber) {
      setFormError("Serial number is required.");
      return;
    }
    if (!formData.batteryCapacity) {
      setFormError("Battery capacity is required.");
      return;
    }
    if (!formData.model) {
      setFormError("Model is required.");
      return;
    }


    // Submit form data to the REST API endpoint
    // Submit form data to the REST API endpoint
    try {
        const response = await fetch("/api/drones", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });
        if (response.ok) {
        alert("Drone registered successfully!");
        // Clear form data and show success message
        setFormData({ serialNumber: "", batteryCapacity: "", model: "" });
        } else {
        throw new Error("An error occurred while registering the drone.");
        }
    } catch (error) {
        console.error(error);
        setFormError("An error occurred while registering the drone.");
    }
}
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="serialNumber">Serial Number:</label>
        <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleInputChange}
        />
        <label htmlFor="batteryCapacity">Battery Capacity:</label>
        <input
            type="text"
            id="batteryCapacity"
            name="batteryCapacity"
            value={formData.batteryCapacity}
            onChange={handleInputChange}
        />
        <label htmlFor="model">Model:</label>
        <select
            id="model"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
        >
            <option value="">Select a model</option>
            <option value="LIGHT_WEIGHT">Light Weight</option>
            <option value="MIDDLE_WEIGHT">Middle Weight</option>
            <option value="CRUISER_WEIGHT">Cruiser Weight</option>
            <option value="HEAVY_WEIGHT">Heavy Weight</option>
        </select>
        {formError && <div className="form-error">{formError}</div>}
        <button type="submit" className="btn btn-primary">
            Register Drone
        </button>
        </form>
    );
};
export default NewDroneForm;
