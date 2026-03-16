function Story() {
  return (
    <section className="w-[95%] mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <div className="order-2 lg:order-1 overflow-hidden rounded-2xl border-2 border-gray-300 h-[400px] md:h-[700px]">
          {/* Image */}
          <img
            src="/abt.jpg"
            alt="Barutt Palace interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="font-serif p-6 md:p-10 bg-white rounded-2xl border-2 border-gray-300 space-y-6 order-1 lg:order-2 flex flex-col justify-start">
          <h2 className="text-4xl md:text-7xl pt-8 pb-4 font-sans text-gray-900">
            Our Story
          </h2>
          <p className="text-2xl md:text-3xl leading-relaxed">
            Nestled in the heart of Bihar, Barutt Palace stands as a testament
            to royal hospitality and cultural heritage. Our hotel seamlessly
            blends traditional architecture with modern luxury, offering guests
            an unforgettable experience.
          </p>

          <p className="text-2xl md:text-3xl leading-relaxed">
            Since our establishment, we have been dedicated to providing
            world-class service while celebrating the rich traditions and warmth
            of Bihar. Each corner of our palace tells a story of elegance and
            grandeur.
          </p>

          <p className="text-2xl md:text-3xl leading-relaxed">
            From our meticulously designed rooms to our authentic local cuisine,
            every detail is crafted to ensure your stay is nothing short of
            extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
