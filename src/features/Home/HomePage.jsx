import { useNavigate } from "react-router-dom";
import { HiBadgeCheck, HiShieldCheck, HiUser } from "react-icons/hi";
import Navbar from "./Navbar";
import FeatureCard from "./FeaturedCard";
import Footer from "./Footer";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 ">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative mt-8 w-full mx-auto overflow-hidden h-[700px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/home-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        <div className="relative z-10 px-4 md:px-0">
          <h1 className="text-7xl lg:text-8xl font-serif mb-6 font-bold text-white drop-shadow-lg">
            Welcome to Nicholas Hotel
          </h1>
          <p className="text-2xl mb-10 text-gray-100 font-semibold drop-shadow-md">
            Experience Royal Hospitality
          </p>

          <div className="flex justify-center gap-6">
            <button
              className="bg-[#b8860b] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition hover:bg-[#a07000] shadow-lg"
              onClick={() => navigate("/room-booking")}
            >
              Book Now
            </button>
            <button
              className="bg-white text-gray-900 px-10 py-4 rounded-full hover:bg-gray-100 transition font-bold text-lg shadow-lg"
              onClick={() => navigate("/rooms")}
            >
              Explore Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative  py-20 w-[80%] mx-auto">
        {/* Background blur */}
        {/* <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/30 blur-[150px] rounded-full pointer-events-none" /> */}

        {/* Cards container */}
        <div className="relative z-10 flex flex-col md:flex-row gap-10 justify-center items-center text-center w-[100%] md:w-[80%] mx-auto">
          <FeatureCard
            icon={<HiBadgeCheck size={32} />}
            title="Luxury"
            desc="Experience royal hospitality"
          />
          <FeatureCard
            icon={<HiShieldCheck size={32} />}
            title="Comfort"
            desc="Your home away from home"
          />
          <FeatureCard
            icon={<HiUser size={32} />}
            title="Culture"
            desc="Bihar-inspired heritage"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
