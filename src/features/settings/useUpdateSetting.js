import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,

    onSuccess: () => {
      queryClient.invalidateQueries["settings"];
      toast.success("Settings was succesfully updated");
    },
    onError: (err) => {
      toast.error("Settings could not updated");
      throw new Error(err.message);
    },
  });
  return { isUpdating, updateSetting };
}

export default useUpdateSetting;
