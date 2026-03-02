import styled from "styled-components";
import PropTypes from "prop-types";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { HiArrowDownOnSquare, HiTrash } from "react-icons/hi2";
import useDeleteBooking from "../../hooks/useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;
const statusToTagName = {
  unconfirmed: "blue",
  "checked-in": "green",
  "checked-out": "silver",
};

function BookingRow({ booking }) {
  const { isDeleting, deleteBooking } = useDeleteBooking();
  const {
    id: bookingId,
    startDate,
    endDate,
    numNigths,
    hasBreakfast = false,
    totalPrice,
    status,
    guest: { fullName: guestName, email },
    Cabins: { name: cabinName },
    // created_at,
    // numGuests,
  } = booking;

  //
  // const guestName = guest?.fullName ?? "Unknown guest";
  // const email = guest?.email ?? "—";
  // const cabinName = Cabins?.name ?? "Unknown cabin";

  //

  const navigate = useNavigate();
  // console.log(hasBreakfast);

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNigths} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      {/*  */}
      <Modal>
        <span style={{ display: "flex", paddingInline: "5px" }}>
          <button
            onClick={() => navigate(`/bookings/${bookingId}`)}
            style={{ cursor: "pointer" }}
          >
            <HiEye />
          </button>
          {status === "unconfirmed" && !hasBreakfast && (
            <button onClick={() => navigate(`/checkin/${bookingId}`)}>
              <HiArrowDownOnSquare />
            </button>
          )}
          <Modal.Open opens="delete">
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="bookings"
              disabled={isDeleting}
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </span>
      </Modal>
    </Table.Row>
  );
}

BookingRow.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    numNigths: PropTypes.number.isRequired,
    numGuests: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    hasBreakfast: PropTypes.bool,
    status: PropTypes.string.isRequired,
    guest: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    Cabins: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default BookingRow;
