"use client";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaReadme } from "react-icons/fa6";

interface MenuItem {
  title: string;
  href: string;
}

const links: MenuItem[] = [
  {
    title: "Perfil",
    href: "#",
  },
  {
    title: "Escrever",
    href: "#",
  },
  {
    title: "Descobrir",
    href: "#",
  },
  {
    title: "Settings",
    href: "#",
  },
  {
    title: "FAQ",
    href: "#",
  },
];

const MenuItems = () => {
  return (
    <ul className="text-primary  gap-5 font-medium sm:flex hidden">
      {links.map((link) => (
        <li
          className="hover:text-[#1CC0A9] cursor-pointer delay-100"
          key={link.title}
        >
          {link.title}
        </li>
      ))}
    </ul>
  );
};

const MenuItemsMobile = () => {
  return (
    <ul className="text-primary  gap-2 font-medium sm:hidden mx-auto flex relative rounded z-10">
      <li className="hover:text-[#1CC0A9] cursor-pointer -translate-y-7 delay-100 bg-[#1CC0A9]  rounded-full flex p-4 justify-center border-[10px] border-[#333] items-center  ">
        <FaUser className="text-3xl" />
      </li>
      <li className="hover:text-[#1CC0A9]  z-20  cursor-pointer delay-100 ] border-[10px] border-[#222]  rounded-full flex p-4 justify-center items-center  ">
        <PiPencilSimpleLineFill className="text-3xl" />
      </li>
      <li className="hover:text-[#1CC0A9] cursor-pointer delay-100   rounded-full flex p-4 border-[10px] border-[#222] justify-center items-center  ">
        <FaReadme className="text-3xl" />
      </li>
      <li className="hover:text-[#1CC0A9] cursor-pointer delay-100   rounded-full flex p-4 border-[10px] border-[#222] justify-center items-center  ">
        <IoMdSettings className="text-3xl" />
      </li>
    </ul>
  );
};

export default function Header() {
  return (
    <header className="   sm:py-5 sm:px-5 bg-secondary shadow-2xl z-10  fixed bottom-0 w-full sm:relative sm:rounded-none rounded-t-[2rem] ">
      <div className="flex justify-between items-center mx-auto max-w-7xl z-10 ">
        <p className="text-3xl text-primary font-extralight sm:block hidden">
          Your Day
        </p>
        <MenuItems />
        <MenuItemsMobile />
        <div className="sm:block hidden">
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
}
