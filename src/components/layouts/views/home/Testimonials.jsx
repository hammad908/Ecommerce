import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Fatima',
    role: 'Influencer',
    comment: 'Mene inka p4 purchase kiya tha and they are the best.',
    avatar: 'https://randomuser.me/api/portraits/women/89.jpg',
  },
  {
    id: 2,
    name: 'Hammad',
    role: 'Youtuber',
    comment: 'Best place for purchasing quality gadgets.',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 3,
    name: 'Ayesha',
    role: 'Student',
    comment: "Bht achi products hain inki... I will shop again.",
    avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
  },
  {
    id: 4,
    name: 'Fazal',
    role: 'Gadget Reviewer',
    comment: 'The gaming gear I bought here gave me an edge. Very satisfied!',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    id: 5,
    name: 'Zara',
    role: 'Interior Designer',
    comment: 'Fast shipping and beautiful packaging. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 6,
    name: 'Ali',
    role: 'Streamer',
    comment: 'Top-tier audio gear! Got everything I needed in one place.',
    avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
  },
  {
    id: 7,
    name: 'Maham',
    role: 'Photographer',
    comment: 'Excellent customer service and the product quality is unmatched.',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const Testimonials = () => {
  const scrollRef = useRef();

  const scrollByAmount = 320;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollByAmount : -scrollByAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-red-500">Our Reviews</h2>
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[300px] bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-red-500/30 transition duration-300 flex-shrink-0 snap-center"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-red-500 mr-4"
                  />
                  <div>
                    <h4 className="text-red-400 font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.comment}"</p>
                <div className="flex text-red-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-400 text-white p-3 rounded-full shadow-lg transition duration-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-400 text-white p-3 rounded-full shadow-lg transition duration-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
