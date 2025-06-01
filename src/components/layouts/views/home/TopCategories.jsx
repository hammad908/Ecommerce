import { useRef } from 'react';

const categories = [
  { id: 6, name: 'Monitor', image: 'https://cdn.leonardo.ai/users/41cab78e-71a4-4460-8eea-794847781051/generations/0d10774d-e26f-4a0c-b5b6-bea0d624149e/Leonardo_Phoenix_10_Create_a_sleek_highgloss_crimson_futuristi_2.jpg' },
  { id: 7, name: 'Speakers', image: 'https://cdn.leonardo.ai/users/41cab78e-71a4-4460-8eea-794847781051/generations/7e5b8e1f-8981-49eb-aa56-3cae20dcb0a7/Leonardo_Phoenix_10_Render_a_futuristic_gaming_speaker_system_1.jpg' },
  { id: 1, name: 'Headsets', image: 'https://cdn.leonardo.ai/users/3d1a158e-1f85-4748-a3aa-1d5e86bbd824/generations/b3631baf-2a74-423d-a6ba-816bee3c46ed/segments/1:4:1/Flux_Dev_a_sleek_hightech_crimson_gaming_headset_with_curved_l_0.jpg' },
  { id: 4, name: 'Keyboard', image: 'https://cdn.leonardo.ai/users/41cab78e-71a4-4460-8eea-794847781051/generations/c0595dc7-d2ee-47b0-920d-47126df14561/Leonardo_Phoenix_10_A_sleek_hightech_gaming_keyboard_with_a_bo_3.jpg' },
  { id: 5, name: 'Mouse', image: 'https://cdn.leonardo.ai/users/41cab78e-71a4-4460-8eea-794847781051/generations/643b2811-922e-438d-8eef-6a2a8d7b9e23/Leonardo_Phoenix_10_Create_a_sleek_hightech_gaming_mouse_with_0.jpg' },
  { id: 2, name: 'Phone', image: 'https://cdn.leonardo.ai/users/cbdda5ea-35cc-459b-beca-48b637ebe7b7/generations/f56bff5d-bf75-475d-99a1-04a411dd51e0/segments/1:4:1/Flux_Dev_a_sleek_hightech_crimson_gaming_smartphone_with_a_glo_0.jpg' },
  { id: 3, name: 'Laptop', image: 'https://cdn.leonardo.ai/users/3d1a158e-1f85-4748-a3aa-1d5e86bbd824/generations/af264ee7-a1ca-4b07-88e4-62f29aa807e7/segments/3:4:1/Flux_Dev_a_sleek_highperformance_gaming_laptop_with_a_vibrant__2.jpg' },
];


const TopCategories = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === 'right' ? 320 : -320,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-red-500">Shop by Category</h2>

        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="min-w-[260px] group relative rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-[0_0_25px_#f87171] flex-shrink-0 snap-center"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-red-500/40 transition duration-300 clip-diagonal"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h3 className="text-xl font-bold text-red-400 group-hover:text-white transition duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 hover:shadow-[0_0_15px_#d946ef] text-white p-3 rounded-full z-10 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 hover:shadow-[0_0_15px_#d946ef] text-white p-3 rounded-full z-10 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Diagonal clipping style */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%);
        }
      `}</style>
    </section>
  );
};

export default TopCategories;
