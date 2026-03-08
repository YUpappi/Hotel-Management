import Story from "../features/About/Story";
import ValuesSection from "../features/About/ValueSection";
import Footer from "../features/Home/Footer";
import Navbar from "../features/Home/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <section className="relative mt-8 w-[100%]  lg:w-[95%] mx-auto ">
        <Story />
        <ValuesSection />
      </section>
      <Footer />
    </div>
  );
}

export default About;
