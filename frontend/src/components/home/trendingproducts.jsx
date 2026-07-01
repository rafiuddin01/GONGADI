import {
  FaStar,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

import blanket from "../../assets/images/products/gongadi-blanket.png";
import bidri from "../../assets/images/products/bidri-vase.png";
import pottery from "../../assets/images/products/blue-pottery.png";
import saree from "../../assets/images/products/patola-saree.png";
import mirror from "../../assets/images/products/aranmula-mirror.png";
import sarees from "../../assets/images/products/kanchipuramsilksarees.png";
import toys from "../../assets/images/products/channapatna-toys.png";
import kantha from "../../assets/images/products/kantha-embroidery.png";

const products = [
  {
    image: blanket,
    name: "Gongadi Blanket",
    state: "Andhra Pradesh",
    price: "₹12,500",
  },
  {
    image: bidri,
    name: "Bidri Vase",
    state: "Telangana",
    price: "₹8,900",
  },
  {
    image: pottery,
    name: "Blue Pottery",
    state: "Rajasthan",
    price: "₹3,200",
  },
  {
    image: saree,
    name: "Patola Saree",
    state: "Gujarat",
    price: "₹18,500",
  },
  {
    image: mirror,
    name: "Aranmula Mirror",
    state: "Kerala",
    price: "₹6,800",
  },
  {
    image: sarees,
    name: "Kanchipuramsilksaree",
    state: "Tamil Nadu",
    price: "₹15,000",
  },
  {
    image: toys,
    name: "Channapatna Toys",
    state: "Karnataka",
    price: "₹2,100",
  },
  {
    image: kantha,
    name: "Kantha Embroidery",
    state: "West Bengal",
    price: "₹4,500",
  },
];

function TrendingProducts() {
  return (
    <section className="trending-products">

      <div className="section-heading">
        <span>🔥 Best Selling Heritage</span>
        <h2>Trending Heritage Products</h2>
        <p>
          Handpicked traditional crafts loved by customers across India.
        </p>
      </div>

      <div className="products-grid">

        {products.map((item) => (

          <div className="product-box" key={item.name}>

            <div className="wishlist">
              <FaHeart />
            </div>

            <img src={item.image} alt={item.name} />

            <div className="product-details">

              <h3>{item.name}</h3>

              <small>{item.state}</small>

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h4>{item.price}</h4>

              <button>
                <FaShoppingCart />
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TrendingProducts;