import FeatureCard from "../Home/FeaturedCard";

const values = [
  {
    title: "Luxury",
    description: "Premium amenities and world-class service",
  },
  {
    title: "Comfort",
    description: "Rooms designed for ultimate relaxation",
  },
  {
    title: "Culture",
    description: "Celebrating Bihar's rich heritage",
  },
];

export default function ValuesSection() {
  return (
    <>
      {/* Features */}
      <section className="relative py-20 w-[95%] md:w-[80%] mx-auto">
        {/* Background blur removed */}

        <h2 className="text-6xl text-center text-gray-900 py-8 font-sans">
          Our Values
        </h2>

        {/* Cards container */}
        <div className="relative flex flex-col md:flex-row gap-10 justify-center items-center text-center ">
          {values.map((value) => (
            <FeatureCard
              key={value.title}
              title={value.title}
              desc={value.description}
            />
          ))}
        </div>
      </section>

      {/*  */}
    </>
  );
}
