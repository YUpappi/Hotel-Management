import styled from "styled-components";
import PropTypes from "prop-types";
import Tag from "../../ui/Tag";
// import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: flex;
  justify-content: space-between;

  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { status, id: bookingId, guest, numNigths } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      {/* <Flag src={guest.countryFlag} alt={`flag of ${guest.country}`} /> */}
      <Guest>{guest.fullName}</Guest>
      <div>{numNigths} nights</div>
      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${bookingId}`}
        >
          check in
        </Button>
      )}

      {status === "checked-in" && (
        <CheckoutButton size="small" bookingId={bookingId}>
          Check out
        </CheckoutButton>
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;

TodayItem.propTypes = {
  activity: PropTypes.shape({
    status: PropTypes.string,
    id: PropTypes.number,
    guest: PropTypes.shape({
      fullName: PropTypes.string,
    }),
    numNigths: PropTypes.number,
  }).isRequired,
};
