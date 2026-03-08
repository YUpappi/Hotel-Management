import useCabins from "../features/cabins/useCabins";
import Footer from "../features/Home/Footer";
import Navbar from "../features/Home/Navbar";
import RoomCard from "../features/Rooms/RoomCard";
import Spinner from "../ui/Spinner";

// const rooms = [
//   {
//     image: "/hotel-img1.jpg",
//     title: "Deluxe Suite",
//     price: 15000,
//     guests: 2,
//     size: 450,
//     amenities: ["WiFi", "Coffee Maker", "Smart TV", "AC"],
//   },
//   {
//     image: "/hotel-img2.jpg",
//     title: "Royal Chamber",
//     price: 25000,
//     guests: 4,
//     size: 750,
//     amenities: ["WiFi", "Coffee Maker", "Smart TV", "AC"],
//   },
//   {
//     image: "/hotel-img3.jpg",
//     title: "Executive Suite",
//     price: 18000,
//     guests: 2,
//     size: 550,
//     amenities: ["WiFi", "Coffee Maker", "Smart TV", "AC"],
//   },
// ];

export default function Rooms() {
  const { isLoading, cabins } = useCabins();
  if (isLoading) return <Spinner />;
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 ">
      <Navbar />
      <section className=" w-[90%] mx-auto">
        <h1 className="text-6xl md:text-8xl text-amber-700 pt-6 pb-5 font-serif mb-4 text-center">
          Our Luxurious Rooms
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {cabins?.map((cabin) => (
            <RoomCard key={cabin.id} cabin={cabin} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
