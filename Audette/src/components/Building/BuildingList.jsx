import BuildingItem from "./BuildingItem";
import useGetBuildingsQuery from "../../queries/useGetBuildings";

const BuildingList = () => {
  const { data, isLoading, error } = useGetBuildingsQuery();
  if (isLoading) {
    return <div className="spinner"></div>;
  }
  if (error) {
    return (
      <p style={{ color: "red" }}>
        Could not retrieve buildings: {error.message}
      </p>
    );
  }
  return (
    <ul className={data.length > 0 ? "buildings-list" : ""}>
      {data
        ?.sort((a, b) => b.id - a.id)
        .map((building) => (
          <BuildingItem key={building.id} building={building} />
        ))}
    </ul>
  );
};

export default BuildingList;
