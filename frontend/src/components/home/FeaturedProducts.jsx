function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Handmade Clay Pot",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500",
    },
    {
      id: 2,
      name: "Traditional Handloom Saree",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    },
    {
      id: 3,
      name: "Wooden Elephant",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
    },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;