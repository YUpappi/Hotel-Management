import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../services/apiBookings";
import toast from "react-hot-toast";

function useCheckingOut() {
  const queryClient = useQueryClient();

  const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking for #${data.id} was checked out successfully`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => toast.error(error.message),
  });
  return { checkOut, isCheckingOut };
}

export default useCheckingOut;
