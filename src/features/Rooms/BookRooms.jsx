import Modal from "../../ui/Modal";
import RoomDetails from "./RoomDetails";
import PropTypes from "prop-types";

function BookRooms({ cabinId }) {
  return (
    <Modal>
      <Modal.Open opens="book-rooms">
        <button className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-full font-medium hover:bg-yellow-400 transition">
          View Details{" "}
        </button>
      </Modal.Open>
      <Modal.Window name="book-rooms">
        <RoomDetails cabinId={cabinId} />
      </Modal.Window>
    </Modal>
  );
}

export default BookRooms;

BookRooms.propTypes = {
  cabinId: PropTypes.number.isRequired,
};
