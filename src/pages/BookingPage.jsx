import BookingForm from "../features/bookings/BookingForm";
import BookingSection from "../features/bookings/BookingSection";
import Footer from "../features/Home/Footer";
import Navbar from "../features/Home/Navbar";

function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <section className=" mt-8 w-full  lg:w-[95%] mx-auto ">
        <BookingSection />
        <BookingForm />
      </section>
      <Footer />
    </div>
  );
}

export default BookingPage;
