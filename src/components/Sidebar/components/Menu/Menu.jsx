import burger from "../../../../assets/images/hamburger.svg";
import chicken from "../../../../assets/images/chicken.svg";
import submarine from "../../../../assets/images/submarine.png";
import taco from "../../../../assets/images/taco.png";
import soup from "../../../../assets/images/soup.png";
import soda from "../../../../assets/images/soda.png";
import sandwich from "../../../../assets/images/sandwich.png";
import fries from "../../../../assets/images/french-fries.png";
import pizza from "../../../../assets/images/pizza.png";
import pastry from "../../../../assets/images/pastry.png";
import MenuIteam from "../MenuItem/MenuItem";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Burger", price: 299, image: burger },
    { id: 2, name: "Fried Chicken", price: 349, image: chicken },
    { id: 3, name: "Sandwich", price: 199, image: sandwich },
    { id: 4, name: "Pizza", price: 599, image: pizza },
    { id: 5, name: "Taco", price: 249, image: taco },
    { id: 6, name: "Submarine Sandwich", price: 279, image: submarine },
    { id: 7, name: "Fries", price: 189, image: fries },
    { id: 8, name: "Soup", price: 199, image: soup },
    { id: 9, name: "Soda", price: 99, image: soda },
    { id: 10, name: "Pastry", price: 229, image: pastry },
  ];
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        {menuItems.map((item) => (
          <MenuIteam
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
