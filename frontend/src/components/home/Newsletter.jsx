import { FaEnvelope } from "react-icons/fa";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-box">

        <FaEnvelope className="newsletter-icon" />

        <h2>Join the GONGADI Community</h2>

        <p>
          Discover India's finest heritage crafts, artisan stories,
          exclusive collections and special offers.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;