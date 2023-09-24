import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiFillShopping } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import NavbarItem from "./NavbarItem";

export interface INavBar {
  label: string;
  icon: JSX.Element;
  active?: boolean;
}

const navBarItem: INavBar[] = [
  {
    label: "Dashboard",
    icon: <BiHomeAlt size="1.875rem" />,
    active: false,
  },
  {
    label: "ProductManage",
    icon: <AiFillShopping size="1.875rem" />,
    active: true,
  },
  {
    label: "UserManage",
    icon: <BsFillPersonCheckFill size="1.875rem" />,
    active: false,
  },
];

console.log("navBarItem", navBarItem);
const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-500 col-span-1">
      <div className="mx-4 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b text-left border-primary">
          Shop Dev
        </h4>
        {navBarItem &&
          navBarItem.map((item: INavBar, index: number) => (
            <NavbarItem key={index} item={item} />
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
