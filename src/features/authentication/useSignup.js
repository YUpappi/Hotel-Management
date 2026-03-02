import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account was successfully created!. Please verify the new account from the user's email address",
      );
    },
    onError: (error) => {
      toast.error(`Signup failed: ${error.message}`);
    },
  });
  return { signup, isPending };
}

export default useSignup;
