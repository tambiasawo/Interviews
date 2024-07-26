import { useMutation, useQueryClient } from "react-query";
import { API_ADDRESS } from "./constants";
import { queryKey as buildingsQueryKey } from "./useGetBuildings";

const useDeleteBuildingMutation = (building_id) => {
  const queryClient = useQueryClient();
  const url = `${API_ADDRESS}/buildings/${building_id}`;

  return useMutation({
    mutationFn: () =>
      fetch(url, {
        method: "DELETE",
      }).then((res) => res.json()),

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: buildingsQueryKey });
      const previousBuildings = queryClient.getQueryData(buildingsQueryKey);
      const filteredBuildings = previousBuildings.filter(
        (building) => building.id !== building_id
      );
      queryClient.setQueryData(buildingsQueryKey, filteredBuildings);
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(buildingsQueryKey, context.previousBuildings);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: buildingsQueryKey });
    },
  });
};

export default useDeleteBuildingMutation;
