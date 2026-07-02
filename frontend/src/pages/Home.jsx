import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedStates from "../components/home/FeaturedStates";
import ShopByCraft from "../components/home/ShopByCraft";
import TrendingProducts from "../components/home/TrendingProducts";
import FeaturedArtisans from "../components/home/FeaturedArtisans";
import Testimonials from "../components/home/Testimonials";
import Statistics from "../components/home/Statistics";
import IndiaMap from "../components/home/IndiaMap";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedStates />
      <ShopByCraft />
      <TrendingProducts />
      <FeaturedArtisans />
      <Testimonials />
      <Statistics />
      <IndiaMap />
      <Newsletter />
       <Footer />
    </>
  );
}

export default Home;