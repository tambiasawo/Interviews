import { useMutation, useQueryClient } from "react-query";
import { API_ADDRESS } from "./constants";
import { queryKey as buildingsQueryKey } from "./useGetBuildings";

const useAddBuildingMutation = () => {
  const url = `${API_ADDRESS}/buildings`;
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),

    onMutate: async (newBuilding) => {
      await queryClient.cancelQueries({ queryKey: buildingsQueryKey });

      const previousBuildings = queryClient.getQueryData(buildingsQueryKey);

      queryClient.setQueryData(buildingsQueryKey, (old) => {
        return [{ id: new Date().toISOString(), ...newBuilding }, ...old];
      });

      return { previousBuildings };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(buildingsQueryKey, context.previousBuildings);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: buildingsQueryKey });
    },
  });
};

export default useAddBuildingMutation;
