function Story() {
  return (
    <section className="w-[95%] mx-auto py-20">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between ">
        {/* Image */}
        <img
          src="/abt.jpg"
          alt="Barutt Palace interior"
          className="w-full md:w-1/2 object-cover rounded-2xl border-2 border-zinc-100  h-[350px] md:h-[550px]"
        />

        {/* Text */}
        <div
          className="w-full md:w-1/2 text-3xl font-serif p-6 md:p-10 bg-white rounded-2xl border-2 border-gray-300 space-y-6 
        h-[350px] md:h-[550px] text-gray-800"
        >
          <h2 className="text-6xl  pt-8 pb-4 font-sans text-gray-900">
            Our Story
          </h2>
          <p>
            Nestled in the heart of Bihar, Barutt Palace stands as a testament
            to royal hospitality and cultural heritage. Our hotel seamlessly
            blends traditional architecture with modern luxury, offering guests
            an unforgettable experience.
          </p>

          <p>
            Since our establishment, we have been dedicated to providing
            world-class service while celebrating the rich traditions and warmth
            of Bihar. Each corner of our palace tells a story of elegance and
            grandeur.
          </p>

          <p>
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
