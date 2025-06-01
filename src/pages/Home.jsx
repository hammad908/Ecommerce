// src/pages/Home.jsx
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import HeroSection from '../components/layouts/views/home/HeroSection';
import TopCategories from '../components/layouts/views/home/TopCategories';
import FeaturesProducts from '../components/layouts/views/home/FeaturesProducts';
import Testimonials from '../components/layouts/views/home/Testimonials';
import NewsletterSignup from '../components/layouts/views/home/NewsletterSignup';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TopCategories />
        <FeaturesProducts />
        <Testimonials />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Home;