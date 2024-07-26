import { useQuery } from "react-query";
import { API_ADDRESS } from "./constants";

export const queryKey = ["buildings"];
const url = `${API_ADDRESS}/buildings`;

const useGetBuildingsQuery = () => {
  return useQuery({
    queryKey: ["buildings"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
};

export default useGetBuildingsQuery;
