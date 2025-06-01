const Navbar = () => {
  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-2">
          
          <span className="text-3xl font-extrabold text-red-500 tracking-wide">
            Gadex
          </span>
        </div>

        {/* Center: Search & Cart */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-gray-300 text-sm px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="absolute right-2 top-1.5 text-gray-400 hover:text-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>

          {/* Cart */}
          <button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-red-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </button>
        </div>

        {/* Right: Navigation */}
        <nav className="flex space-x-4">
          {["Home", "Categories", "New Arrivals", "Contact Us"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 bg-gray-900 hover:bg-red-500 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
