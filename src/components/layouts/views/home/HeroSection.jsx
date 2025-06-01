const HeroSection = () => {
  return (
    <section
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('./src/assets/Flux_Dev_a_sleek_highperformance_red_gaming_laptop_with_a_vibr_2.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-center px-4 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-4 drop-shadow-md">
          Discover Our New 2025 Range
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Shop our latest arrivals and save big!
        </p>
        <button className="bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#f87171]">
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
