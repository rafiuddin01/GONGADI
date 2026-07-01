function Categories() {
  const categories = [
    "🧵 Handloom",
    "🏺 Pottery",
    "🎨 Paintings",
    "🧺 Baskets",
    "🪵 Wooden Art",
    "🪡 Embroidery",
  ];

  return (
    <section className="categories">
      <h2>Explore Categories</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;