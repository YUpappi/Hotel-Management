import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking as createBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useUploadBookings() {
  const queryClient = useQueryClient();
  const { mutate: createBooking, isPending } = useMutation({
    mutationFn: createBookingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });

      toast.success("Booking created successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
  return { createBooking, isPending };
}

export default useUploadBookings;
