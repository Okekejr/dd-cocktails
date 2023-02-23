import { MenuData } from "@/components/menu/menuData";
import MenuPage from "@/components/_pages/menupage";
import { NextPage } from "next";

const Menu: NextPage = () => {
  return <MenuPage data={MenuData} />;
};

export default Menu;
