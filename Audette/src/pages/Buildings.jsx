import AddBuilding from "../components/Building/AddBuilding";
import BuildingList from "../components/Building/BuildingList";

const Buildings = () => {
  return (
    <div className="dashboard">
      <h1>Buildings</h1>
      <AddBuilding />
      <BuildingList />
    </div>
  );
};

export default Buildings;
