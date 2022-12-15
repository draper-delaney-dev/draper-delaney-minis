import Card from '../ui/Card';
import foodImage from '../../assets/mini-food-1.jpg';

const MenuItemCard = () => {
  return (
    <Card classes="w-9/12 m-8">
      {/* image */}
      <img src={foodImage} alt="a plate of food" className="rounded-t"/>
      {/* description */}
      <p className="p-8 text-center">not sure what this is but it looked good and I just needed a placeholder</p>
      {/* price */}
      <div className="bg-slate-800 rounded-b">
        <p className="p-4 text-center text-slate-100">$12.99</p>
      </div>
    </Card>
  );
};

export default MenuItemCard;