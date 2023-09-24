import React from "react";
import { INavBar } from "./Navbar";
interface INavBarProps {
  item: INavBar;
}
const NavbarItem: React.FC<INavBarProps> = ({ item }: INavBarProps) => {
  const { label, icon, active } = item;
  console.log({
    label,
    icon,
    active,
  });
  return (
    <ul className="mx-4 my-2">
      <li
        className={`flex p-2 justify-start items-center cursor-pointer gap-2 ${
          active ? "bg-primary text-white" : ""
        }`}
      >
        {icon}
        <h3>{label}</h3>
      </li>
    </ul>
  );
};

export default NavbarItem;
