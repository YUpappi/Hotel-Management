import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/dashboard", { replace: true });
      toast.success("Login successful!");
    },
    onError: (error) => {
      console.error("Login failed:", error);
      toast.error(`Login failed: ${error.message}`);
    },
  });
  return { login, isPending };
}
