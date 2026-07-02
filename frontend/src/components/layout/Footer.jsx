import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-column">

          <h2 className="footer-logo">🧶 GONGADI</h2>

          <p>
            GONGADI is a digital heritage marketplace connecting talented Indian
            artisans with customers worldwide while preserving traditional
            craftsmanship.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Explore States</li>
            <li>Shop by Craft</li>
            <li>Trending Products</li>
            <li>Artisans</li>
          </ul>

        </div>

        {/* Categories */}

        <div className="footer-column">

          <h3>Popular Crafts</h3>

          <ul>
            <li>Handloom</li>
            <li>Pottery</li>
            <li>Wood Crafts</li>
            <li>Paintings</li>
            <li>Metal Crafts</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 98765 43210</p>

          <p><FaEnvelope /> support@gongadi.in</p>

          <p><FaMapMarkerAlt /> Hyderabad, India</p>

          <div className="footer-social">

            <FaFacebookF />

            <FaInstagram />

            <FaLinkedinIn />

            <FaYoutube />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 GONGADI | Preserving India's Heritage, One Craft at a Time.

      </div>

    </footer>
  );
}

export default Footer;