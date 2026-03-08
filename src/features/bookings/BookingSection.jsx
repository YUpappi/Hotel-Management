import { HiBadgeCheck, HiBriefcase, HiUserGroup } from "react-icons/hi";
import FeatureCard from "../Home/FeaturedCard";

const values = [
  {
    icon: <HiBadgeCheck size={32} />,
    title: "Flexible Dates",
    description: "Choose Preffered dates",
  },
  {
    icon: <HiUserGroup size={32} />,
    title: "Any Group size",
    description: "from solo to family size",
  },
  {
    icon: <HiBriefcase size={32} />,
    title: "Secure Payment",
    description: "Safe and easy payment options",
  },
];

function BookingSection() {
  return (
    <>
      <section className="relative py-10 w-[92%] md:w-[80%] mx-auto">
        {/* Background blur removed */}

        <h2 className="text-amber-700 text-[6rem] text-center pb-8 font-mono">
          Book your stay
        </h2>

        {/* Cards container */}
        <div className="relative flex flex-col md:flex-row gap-10 justify-center items-center text-center">
          {values.map((value) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              desc={value.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default BookingSection;
