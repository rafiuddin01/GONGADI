import andhra from "../../assets/images/states/andhra-pradesh.png";
import telangana from "../../assets/images/states/telangana.png";
import rajasthan from "../../assets/images/states/rajasthan.png";
import gujarat from "../../assets/images/states/gujarat.png";
import karnataka from "../../assets/images/states/karnataka.png";
import kerala from "../../assets/images/states/kerala.png";
import tamilnadu from "../../assets/images/states/tamilnadu.png";
import westbengal from "../../assets/images/states/westbengal.png";

const states = [
  {
    name: "Andhra Pradesh",
    craft: "Gongadi Blanket",
    image: andhra,
  },
  {
    name: "Telangana",
    craft: "Bidriware",
    image: telangana,
  },
  {
    name: "Rajasthan",
    craft: "Blue Pottery",
    image: rajasthan,
  },
  {
    name: "Gujarat",
    craft: "Patola Saree",
    image: gujarat,
  },
  {
    name: "Karnataka",
    craft: "Channapatna Toys",
    image: karnataka,
  },
  {
    name: "Kerala",
    craft: "Aranmula Mirror",
    image: kerala,
  },
  {
    name: "Tamil Nadu",
    craft: "Tanjore Painting",
    image: tamilnadu,
  },
  {
    name: "West Bengal",
    craft: "Kantha Embroidery",
    image: westbengal,
  },
];

function FeaturedStates() {
  return (
    <section className="featured-states">

      <div className="section-title">

        <p>Explore India's Heritage</p>

        <h2>Famous Traditional Crafts by State</h2>

      </div>

      <div className="states-grid">

        {states.map((state) => (
          <div className="state-card" key={state.name}>

            <img src={state.image} alt={state.name} />

            <div className="state-overlay">

              <h3>{state.name}</h3>

              <p>{state.craft}</p>

              <button>Explore →</button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedStates;