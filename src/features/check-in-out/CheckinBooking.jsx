import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBookings from "../bookings/useBookings";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import useCheckingIn from "../../hooks/useCheckingIn";
import useSettings from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";
import useDeleteBooking from "../../hooks/useDeleteBooking";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [checked, setChecked] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { isLoading, booking } = useBookings();
  const { checkIn, isCheckingIn } = useCheckingIn();
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const { isDeleting, deleteBooking } = useDeleteBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  //
  //
  useEffect(() => {
    setChecked(booking?.isPaid ?? false);
  }, [booking]);

  if (isLoading || !booking || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guest,
    numGuests,
    numNigths,
    hasBreakfast,
    totalPrice,
  } = booking;
  //
  const { breakfastPrice } = settings;
  //
  const optionalBreakfast = Number(breakfastPrice * numNigths * numGuests);

  function handleCheckin() {
    if (!checked) return;
    if (addBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfast,
          totalPrice: totalPrice + optionalBreakfast,
        },
      });
    } else {
      checkIn({
        bookingId,
        breakfast: {},
      });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((confirm) => !confirm);
              setChecked(false);
            }}
            id="add-breakfast"
          >
            Wants to add breakfast for {formatCurrency(optionalBreakfast)}
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={checked}
          onChange={() => setChecked((confirm) => !confirm)}
          id="confirmed-payment"
          disabled={(booking.isPaid && !addBreakfast) || isCheckingIn}
        >
          I confirm that {guest.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : ` ${formatCurrency(Number(totalPrice + optionalBreakfast))} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfast)})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Modal>
          <Button
            onClick={handleCheckin}
            disabled={!checked || isCheckingIn}
            variation="primary"
          >
            Check in
          </Button>
          {/*  */}
          {/* delete button */}
          <Modal.Open opens="delete">
            <Button variation="danger">Delete</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="bookings"
              disabled={isDeleting}
              onConfirm={() => {
                deleteBooking(bookingId, { onSettled: () => navigate(-1) });
              }}
            />
          </Modal.Window>

          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </Modal>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
