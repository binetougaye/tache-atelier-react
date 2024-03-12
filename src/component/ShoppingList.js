import PlantItem from "./PlantItem";
import fleur1 from "../images/fleur1.jpg";
import CareScale from "./CareScale";
const ShoppingList = () => {
  const tab = [
    {
      id: 1,
      title: "Belle de jour",
      src: fleur1,
      price: 25,
      iconWater: [<i class="fa fa-tint" aria-hidden="true"></i>],
      iconSun: [
        <i class="fa fa-sun-o" aria-hidden="true"></i>,
        <i class="fa fa-sun-o" aria-hidden="true"></i>,
        <i class="fa fa-sun-o" aria-hidden="true"></i>,
      ],
    },
    {
      id: 2,
      title: "Montserrat",
      src: fleur1,
      price: 5,
      iconWater: [
        <i class="fa fa-tint" aria-hidden="true"></i>,
        <i class="fa fa-tint" aria-hidden="true"></i>,
        <i class="fa fa-tint" aria-hidden="true"></i>,
      ],
      iconSun: [
        <i class="fa fa-sun-o" aria-hidden="true"></i>,
        <i class="fa fa-sun-o" aria-hidden="true"></i>,
      ],
    },
    {
      id: 3,
      title: "Lotus",
      src: fleur1,
      price: 4,
      iconWater: [
        <i class="fa fa-tint" aria-hidden="true"></i>,
        <i class="fa fa-tint" aria-hidden="true"></i>,
      ],
      iconSun: [
        <i class="fa fa-sun-o" aria-hidden="true"></i>,
        <i class="fa fa-sun-o" aria-hidden="true"></i>,
      ],
    },
  ];
  const items = tab.map((item) => (
    <div className="col-lg-4 para test">
      <div className="card border-0">
        <img src={item.src} className="card-img-top rounded-4" alt="..." />
        <p className="price text-center text-white">{item.price}€</p>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <CareScale test2={item.iconWater} test3={item.iconSun} />
          <a href="#" class="btn btn-primary">
            Ajouter
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container mt-4">
      <PlantItem test={items} />
    </div>
  );
};

export default ShoppingList;
