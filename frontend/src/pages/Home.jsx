import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedStates from "../components/home/FeaturedStates";
import ShopByCraft from "../components/home/ShopByCraft";
import TrendingProducts from "../components/home/TrendingProducts";
import FeaturedArtisans from "../components/home/FeaturedArtisans";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedStates />
      <ShopByCraft />
      <TrendingProducts />
      <FeaturedArtisans />
    </>
  );
}

export default Home;