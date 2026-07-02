import {
  FaUsers,
  FaStore,
  FaBoxOpen,
  FaMapMarkedAlt,
} from "react-icons/fa";

function Statistics() {
  return (
    <section className="statistics">

      <div className="section-heading">
        <span>Our Impact</span>

        <h2>GONGADI in Numbers</h2>

        <p>
          Empowering artisans and preserving India's heritage through digital commerce.
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h2>2,500+</h2>
          <p>Registered Artisans</p>
        </div>

        <div className="stat-card">
          <FaStore className="stat-icon" />
          <h2>15,000+</h2>
          <p>Traditional Products</p>
        </div>

        <div className="stat-card">
          <FaBoxOpen className="stat-icon" />
          <h2>50,000+</h2>
          <p>Orders Delivered</p>
        </div>

        <div className="stat-card">
          <FaMapMarkedAlt className="stat-icon" />
          <h2>28</h2>
          <p>States Covered</p>
        </div>

      </div>

    </section>
  );
}

export default Statistics;