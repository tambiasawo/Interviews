import React, { useState } from "react";
import useAddBuildingMutation from "../../queries/useAddBuilding";

const AddBuilding = () => {
  const { mutate } = useAddBuildingMutation();
  const [building, setBuilding] = useState({
    name: "",
    address: "",
  });

  const handleChange = (e) => {
    setBuilding({ ...building, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      name: building.name,
      street_address: building.address,
    });
    setBuilding({
      name: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="address"
        name="address"
        className="form-control"
        value={building.address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      <input
        type="text"
        name="name"
        className="form-control"
        value={building.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <div style={{ margin: "14px" }}>
        <button type="submit" className="form-button">
          Add Building
        </button>
      </div>
    </form>
  );
};

export default AddBuilding;
