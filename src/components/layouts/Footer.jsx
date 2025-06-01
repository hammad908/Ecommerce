const Footer = () => {
  

  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">Gadex</h3>
            <p className="text-gray-400">Customer satisfaction is our top priority.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Returns & Refunds</a></li>
            </ul>
          </div>
          <div>
  <h4 className="font-semibold mb-4 text-red-500">Connect With Us</h4>
  <div className="flex space-x-4">
    {[
      {
        name: 'facebook',
        href: '#',
        svg: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.83c0-2.51 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
          </svg>
        ),
      },
      {
        name: 'twitter',
        href: '#',
        svg: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.03 9.03 0 01-2.85 1.1A4.48 4.48 0 0016.45 0c-2.5 0-4.52 2.1-4.52 4.68 0 .37.04.74.11 1.09A12.94 12.94 0 013 1.67a4.62 4.62 0 00-.61 2.35c0 1.6.77 3.02 1.94 3.85A4.35 4.35 0 012 7.86v.06c0 2.23 1.5 4.1 3.5 4.52a4.52 4.52 0 01-2.05.08 4.5 4.5 0 004.2 3.2A9.05 9.05 0 012 19.54a12.77 12.77 0 006.95 2.1c8.35 0 12.91-7.24 12.91-13.51 0-.21 0-.42-.02-.63A9.55 9.55 0 0023 3z" />
          </svg>
        ),
      },
      {
        name: 'instagram',
        href: '#',
        svg: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
          </svg>
        ),
      },
    ].map((item, i) => (
      <a
        key={i}
        href={item.href}
        className="text-gray-400 hover:text-red-400 transition"
        aria-label={item.name}
      >
        {item.svg}
      </a>
    ))}
  </div>
</div>

        </div>
        <div className="border-t border-red-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} <span className="text-red-500">Gadex</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
