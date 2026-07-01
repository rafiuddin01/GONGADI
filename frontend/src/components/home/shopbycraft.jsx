import {
  FaPaintBrush,
  FaGem,
  FaLeaf,
  FaCubes,
} from "react-icons/fa";

import {
  GiClayBrick,
  GiSewingNeedle,
  GiWoodPile,
  GiTempleGate,
} from "react-icons/gi";

const crafts = [
  {
    icon: <GiClayBrick />,
    title: "Pottery",
    count: "245 Products",
  },
  {
    icon: <GiSewingNeedle />,
    title: "Handloom",
    count: "520 Products",
  },
  {
    icon: <GiWoodPile />,
    title: "Wood Crafts",
    count: "180 Products",
  },
  {
    icon: <FaPaintBrush />,
    title: "Paintings",
    count: "330 Products",
  },
  {
    icon: <FaGem />,
    title: "Jewellery",
    count: "145 Products",
  },
  {
    icon: <GiTempleGate />,
    title: "Metal Crafts",
    count: "212 Products",
  },
  {
    icon: <FaLeaf />,
    title: "Bamboo",
    count: "165 Products",
  },
  {
    icon: <FaCubes />,
    title: "Tribal Art",
    count: "98 Products",
  },
];

function ShopByCraft() {
  return (
    <section className="shop-craft">

      <div className="section-heading">

        <span>Browse Collections</span>

        <h2>Shop by Craft</h2>

        <p>
          Explore India's rich collection of handmade
          traditional crafts.
        </p>

      </div>

      <div className="craft-grid">

        {crafts.map((craft) => (

          <div className="craft-card" key={craft.title}>

            <div className="craft-icon">
              {craft.icon}
            </div>

            <h3>{craft.title}</h3>

            <p>{craft.count}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ShopByCraft;