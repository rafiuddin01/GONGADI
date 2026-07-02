import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Priya Sharma",
    city: "Hyderabad",
    review:
      "The Gongadi Blanket quality is exceptional. Supporting artisans while buying authentic crafts feels wonderful.",
  },
  {
    name: "Rahul Verma",
    city: "Bengaluru",
    review:
      "KalaKart helped me discover beautiful handmade products that I couldn't find anywhere else.",
  },
  {
    name: "Sneha Patel",
    city: "Ahmedabad",
    review:
      "Fast delivery, excellent packaging, and genuine handcrafted products. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-heading">
        <span>What Our Customers Say</span>

        <h2>Customer Testimonials</h2>

        <p>
          Thousands of customers trust KalaKart for authentic handmade crafts.
        </p>
      </div>

      <div className="testimonial-grid">

        {reviews.map((review) => (

          <div className="testimonial-card" key={review.name}>

            <FaQuoteLeft className="quote-icon" />

            <div className="testimonial-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>{review.review}</p>

            <h3>{review.name}</h3>

            <span>{review.city}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;