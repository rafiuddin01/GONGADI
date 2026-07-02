import indiaMap from "../../assets/images/map/india-map.png";

const states = [
  "Andhra Pradesh",
  "Telangana",
  "Tamil Nadu",
  "Karnataka",
  "Kerala",
  "Rajasthan",
  "Gujarat",
  "West Bengal",
];

function IndiaMap() {
  return (
    <section className="india-map-section">

      <div className="section-heading">
        <span>Explore India's Heritage</span>

        <h2>Traditional Crafts Across India</h2>

        <p>
          Discover India's rich handicrafts and explore famous heritage products
          from different states.
        </p>
      </div>

      <div className="india-map-container">

        <div className="map-image">
          <img src={indiaMap} alt="India Map" />
        </div>

        <div className="state-list">
          {states.map((state) => (
            <div className="state-item" key={state}>
              {state}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default IndiaMap;