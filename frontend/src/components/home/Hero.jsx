function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Discover Timeless <br />
          Indian Artistry
        </h1>

        <p>
          Unearth authentic handmade crafts created by
          talented Indian artisans and preserve our rich
          cultural heritage.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Collection
          </button>

          <button className="secondary-btn">
            Become Seller
          </button>
        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=700"
          alt="Pottery"
        />

      </div>
    </section>
  );
}

export default Hero;