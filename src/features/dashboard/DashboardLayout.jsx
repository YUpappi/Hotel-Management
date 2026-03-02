import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import useRecentStays from "./useRecentSays";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
`;
const StyledLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  width: 100%;
`;

function DashboardLayout() {
  const { isLoading, filterBookings } = useRecentBookings();
  const { numDays, confirmedStays, isLoadingStays } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoading || isLoadingStays || isLoadingCabins) return <Spinner />;

  return (
    <>
      <StyledDashboardLayout>
        <Stats
          filterBookings={filterBookings}
          confirmedStays={confirmedStays}
          cabinCounts={cabins.length}
          numDays={numDays}
        />
      </StyledDashboardLayout>
      <StyledLayout>
        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
      </StyledLayout>
      <SalesChart bookings={filterBookings} numDays={numDays} />
    </>
  );
}

export default DashboardLayout;
