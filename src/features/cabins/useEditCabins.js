import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const useEditCabins = () => {
  const queryClient = useQueryClient();
  // Mutation for editing a cabin
  const { mutate: editCabins, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabin, id }) => createCabin(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => toast.error(error.message),
  });
  return { isEditing, editCabins };
};

export default useEditCabins;
