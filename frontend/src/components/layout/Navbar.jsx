import "./Navbar.css";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">🧶</span>
          <h2>GONGADI</h2>
        </div>

        {/* Menu */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Artisans</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">

          <FaSearch className="icon" />

          <FaHeart className="icon" />

          <FaShoppingCart className="icon" />

          <button className="login-btn">
            <FaUser />
            Login
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;