import { useRef } from 'react';

const products = [
  { id: 4, name: 'Gadex K5', price: 30, image: 'https://cdn.leonardo.ai/users/41cab78e-71a4-4460-8eea-794847781051/generations/c0595dc7-d2ee-47b0-920d-47126df14561/Leonardo_Phoenix_10_A_sleek_hightech_gaming_keyboard_with_a_bo_0.jpg' },
  { id: 7, name: 'Gadex HDR Monitor', price: 500, image: 'https://cdn.leonardo.ai/users/41cab78e-71a4-4460-8eea-794847781051/generations/0d10774d-e26f-4a0c-b5b6-bea0d624149e/Leonardo_Phoenix_10_Create_a_sleek_highgloss_crimson_futuristi_3.jpg' },
  { id: 6, name: 'Gadex P4', price: 100, image: 'https://cdn.leonardo.ai/users/41cab78e-71a4-4460-8eea-794847781051/generations/7e5b8e1f-8981-49eb-aa56-3cae20dcb0a7/Leonardo_Phoenix_10_Render_a_futuristic_gaming_speaker_system_3.jpg' },
  { id: 5, name: 'Gadex M4', price: 20, image: 'https://cdn.leonardo.ai/users/41cab78e-71a4-4460-8eea-794847781051/generations/643b2811-922e-438d-8eef-6a2a8d7b9e23/Leonardo_Phoenix_10_Create_a_sleek_hightech_gaming_mouse_with_2.jpg' },
  { id: 1, name: 'Gadex Ultra Sound', price: 50, image: 'https://cdn.leonardo.ai/users/3d1a158e-1f85-4748-a3aa-1d5e86bbd824/generations/b3631baf-2a74-423d-a6ba-816bee3c46ed/segments/2:4:1/Flux_Dev_a_sleek_hightech_crimson_gaming_headset_with_curved_l_1.jpg' },
  { id: 2, name: 'Gadex Future2', price: 300, image: 'https://cdn.leonardo.ai/users/cbdda5ea-35cc-459b-beca-48b637ebe7b7/generations/f56bff5d-bf75-475d-99a1-04a411dd51e0/segments/2:4:1/Flux_Dev_a_sleek_hightech_crimson_gaming_smartphone_with_a_glo_1.jpg' },
  { id: 3, name: 'Gadex SLIM Laptop', price: 800, image: 'https://cdn.leonardo.ai/users/3d1a158e-1f85-4748-a3aa-1d5e86bbd824/generations/af264ee7-a1ca-4b07-88e4-62f29aa807e7/segments/4:4:1/Flux_Dev_a_sleek_highperformance_gaming_laptop_with_a_vibrant__3.jpg' },
];

const FeaturesProducts = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'right' ? 300 : -300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-black text-white relative">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-red-500 tracking-wide">
        New Arrivals
      </h2>

      {/* Scrollable Container */}
      <div className="relative px-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[260px] max-w-[260px] flex-shrink-0 snap-start group relative rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:shadow-[0_0_25px_#f87171]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-red-500/40 transition duration-300 clip-diagonal z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 z-20">
                <h3 className="text-xl font-semibold text-red-400 group-hover:text-white transition duration-300 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 font-bold text-lg">${product.price.toFixed(2)}</span>
                  <button className="bg-red-500 hover:bg-red-400 text-white font-semibold px-4 py-2 rounded-full text-sm transition duration-300 hover:shadow-[0_0_12px_#f87171]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Left */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white p-3 rounded-full shadow-md z-10 hover:scale-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scroll Right */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white p-3 rounded-full shadow-md z-10 hover:scale-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%);
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturesProducts;
