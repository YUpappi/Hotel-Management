import PropTypes from "prop-types";
import Stat from "./Stat";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ filterBookings, confirmedStays, cabinCounts, numDays }) {
  const numBookings = filterBookings.length;

  const sales = filterBookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  //num of checkin night / all available nights(num days * cabins)
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNigths, 0) /
    (numDays * cabinCounts);

  return (
    <>
      <Stat
        color="blue"
        title="bookings"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        color="green"
        title="Sales"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        color="indigo"
        title="check ins"
        icon={<HiOutlineCalendar />}
        value={checkins}
      />
      <Stat
        color="yellow"
        title="occupancy rate"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;

Stats.propTypes = {
  filterBookings: PropTypes.array.isRequired,
  confirmedStays: PropTypes.array.isRequired,
  cabinCounts: PropTypes.number.isRequired,
  numDays: PropTypes.number.isRequired,
};
