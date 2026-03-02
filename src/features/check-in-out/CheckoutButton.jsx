import Button from "../../ui/Button";
import PropTypes from "prop-types";

function CheckoutButton({ bookingId }) {
  return (
    <Button variation="primary" size="small" id={bookingId}>
      Check out
    </Button>
  );
}

export default CheckoutButton;

CheckoutButton.propTypes = {
  bookingId: PropTypes.string,
};
