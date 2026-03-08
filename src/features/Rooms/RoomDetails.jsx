import PropTypes from "prop-types";
import useCabins from "../cabins/useCabins";
import { useNavigate } from "react-router-dom";

function RoomDetails({ cabinId, onCloseModal }) {
  const { cabins = [] } = useCabins();
  const navigate = useNavigate();

  // Find the selected cabin
  const cabin = cabins.find((cab) => cab.id === cabinId);

  if (!cabin) return null;

  const { id, name, image, regularPrice, maxCapacity } = cabin;

  return (
    <div className="grid grid-cols-2 gap-8 bg-gray-100 text-gray-900">
      <div className="">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover rounded-[20px]"
        />
      </div>

      {/* Details */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-gray-900 text-[2.5rem] mb-4 font-serif">{name}</h2>

        <p className="text-amber-700 text-[2rem] mb-6">
          ₦{regularPrice} <span className="text-gray-500 text-lg">/night</span>
        </p>

        <p className="text-gray-600 text-[1.2rem] font-medium">
          Max Capacity: {maxCapacity} Guests
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            className="w-full py-4 bg-yellow-600 text-white rounded-full transition-all duration-500 font-semibold hover:bg-yellow-700"
            onClick={() => {
              onCloseModal();
              navigate(`/room-booking/${id}`);
            }}
          >
            Book Now
          </button>

          <button
            onClick={onCloseModal}
            className="w-full py-4 bg-gray-200 text-gray-900 rounded-full transition-all duration-500 font-semibold hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

RoomDetails.propTypes = {
  cabinId: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  regularPrice: PropTypes.number,
  maxCapacity: PropTypes.number,
  onCloseModal: PropTypes.func,
};

export default RoomDetails;
