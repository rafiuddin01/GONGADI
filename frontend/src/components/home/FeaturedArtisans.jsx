function FeaturedArtisans() {

  const artisans = [
    {
      name: "Ramesh Kumar",
      craft: "Pottery",
      location: "Telangana",
    },
    {
      name: "Lakshmi Devi",
      craft: "Handloom",
      location: "Andhra Pradesh",
    },
    {
      name: "Shankar Rao",
      craft: "Wood Craft",
      location: "Karnataka",
    },
  ];

  return (
    <section className="artisans">

      <h2>Meet Our Artisans</h2>

      <div className="artisan-grid">

        {artisans.map((artisan, index) => (

          <div className="artisan-card" key={index}>

            <h3>{artisan.name}</h3>

            <p>{artisan.craft}</p>

            <span>{artisan.location}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedArtisans;