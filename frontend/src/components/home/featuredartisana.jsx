import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

import artisan1 from "../../assets/images/artisans/artisan1.png";
import artisan2 from "../../assets/images/artisans/artisan2.png";
import artisan3 from "../../assets/images/artisans/artisan3.png";
import artisan4 from "../../assets/images/artisans/artisan4.png";
import artisan5 from "../../assets/images/artisans/artisan5.png";
import artisan6 from "../../assets/images/artisans/artisan6.png";

const artisans = [
  {
    image: artisan1,
    name: "Ramaiah",
    craft: "Gongadi Blanket",
    state: "Andhra Pradesh",
    experience: "32 Years",
  },
  {
    image: artisan2,
    name: "Mohammed Kareem",
    craft: "Bidriware",
    state: "Telangana",
    experience: "28 Years",
  },
  {
    image: artisan3,
    name: "Ramesh Kumawat",
    craft: "Blue Pottery",
    state: "Rajasthan",
    experience: "24 Years",
  },
  {
    image: artisan4,
    name: "Shivanna",
    craft: "Channapatna Toys",
    state: "Karnataka",
    experience: "20 Years",
  },
  {
    image: artisan5,
    name: "Lakshmi",
    craft: "Kanchipuram Silk",
    state: "Tamil Nadu",
    experience: "35 Years",
  },
  {
    image: artisan6,
    name: "Ananya Das",
    craft: "Kantha Embroidery",
    state: "West Bengal",
    experience: "27 Years",
  },
];

function FeaturedArtisans() {
  return (
    <section className="featured-artisans">

      <div className="section-heading">
        <span>Meet Our Masters</span>

        <h2>Featured Artisans</h2>

        <p>
          Every masterpiece tells a story. Meet the skilled artisans preserving
          India's rich cultural heritage.
        </p>
      </div>

      <div className="artisan-grid">

        {artisans.map((artisan) => (

          <div className="artisan-card" key={artisan.name}>

            <img src={artisan.image} alt={artisan.name} />

            <h3>{artisan.name}</h3>

            <h4>{artisan.craft}</h4>

            <p>
              <FaMapMarkerAlt />
              {artisan.state}
            </p>

            <div className="artisan-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <span>{artisan.experience} Experience</span>

            <button>
              View Collection
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedArtisans;