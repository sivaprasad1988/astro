import React from "react";
import { NAVITEMS } from "../Header.astro";
import Button from "../Button.astro";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex md:hidden">
      <Burger open={open} handleOpenClick={handleOpenClick} />
      {open && (
        <div className="absolute top-[112px] left-0 w-full h-full bg-white text-primary-900 p-4">
          <ul className="">
            {NAVITEMS.map((item) => (
              <li className="mb-4" key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Burger = ({ open, handleOpenClick }: any) => {
  const classesTop = `block absolute h-0.5 w-5 bg-primary-900 transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-1.5"}`;
  const classesMiddle = `block absolute h-0.5 w-5 bg-primary-900 transform transition duration-500 ease-in-out ${open ? "opacity-0" : ""}`;
  const classesBottom = `block absolute h-0.5 w-5 bg-primary-900 transform transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-1.5"}`;
  return (
    <button
      className="flex justify-center items-center text-gray-500 w-10 h-10 relative focus:outline-none bg-white"
      onClick={handleOpenClick}
    >
      <span className="sr-only">Open main menu</span>
      <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span aria-hidden="true" className={classesTop}></span>
        <span aria-hidden="true" className={classesMiddle}></span>
        <span aria-hidden="true" className={classesBottom}></span>
      </div>
    </button>
  );
};

export default MobileNav;
