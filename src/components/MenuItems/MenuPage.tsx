import Main from '../ui/Main';
import MenuItemCard from './MenuItemCard';

const MenuPage = () => {
  return (
    <Main classes="grid justify-items-center grid-cols-2 p-12">
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
    </Main>
  );
};

export default MenuPage;