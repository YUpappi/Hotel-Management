import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  // Mutation for creating a cabin
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: ({ fullName, password, avatar }) =>
      updateCurrentUser({ fullName, password, avatar }),
    onSuccess: (user) => {
      toast.success("user details was updated successfully");
      queryClient.setQueryData(["user"], user);
      //   queryClient.invalidateQueries({
      //     queryKey: ["user"],
      //   });
    },
    onError: (error) => toast.error(error.message),
  });
  return { isUpdating, updateUser };
};

export default useUpdateUser;
