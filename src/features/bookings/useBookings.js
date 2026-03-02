import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBookings() {
  // EXTRACT BOOKING ID FROM URL PARAMETERS
  const { bookingId } = useParams();
  // QUERY TO FETCH A SINGLE BOOKING BY ID
  const { data: booking, isLoading } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return { booking, isLoading };
}

export default useBookings;
