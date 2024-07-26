import React from "react";
import useDeleteBuildingMutation from "../../queries/useDeleteBuilding";

const BuildingItem = ({ building }) => {
  const { mutate } = useDeleteBuildingMutation(building.id);

  const handleDeleteBuilding = () => {
    mutate();
  };

  return (
    <li>
      <span>
        {building.name} {building.street_address}
      </span>
      <button onClick={handleDeleteBuilding} className="delete-button">
        X
      </button>
    </li>
  );
};

export default BuildingItem;
