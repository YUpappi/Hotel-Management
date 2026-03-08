import PropTypes from "prop-types";
import BookRooms from "./BookRooms";

function RoomCard({ cabin }) {
  const { id, image, name, regularPrice, maxCapacity } = cabin;
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl w-full   mx-auto transition duration-300">
      {/* Image */}
      <div className="h-[250px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 text-gray-900">
        <h3 className="text-4xl py-2 font-serif">{name}</h3>

        <p className="text-amber-700 text-2xl font-semibold">
          ₦{regularPrice}
          <span className="text-gray-500 text-xl font-normal"> /night</span>
        </p>

        {/* Guests + Size */}
        <div className="flex gap-6 text-xl text-gray-600">
          <span>{maxCapacity} Guests</span>
        </div>

        {/* Button */}
        <BookRooms cabinId={id} />
      </div>
    </div>
  );
}

RoomCard.propTypes = {
  cabin: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    regularPrice: PropTypes.number,
    maxCapacity: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default RoomCard;
