import SwitchTheme from "../SwitchTheme/SwitchTheme";

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
    title: "Descobrir",
    href: "#",
  },
  {
    title: "Suporte",
    href: "#",
  },
];

const MenuItems = () => {
  return (
    <ul className="text-primary flex gap-5 font-medium">
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

export default function Header() {
  return (
    <header className="  py-5 px-5 bg-secondary shadow-2xl  fixed bottom-0 w-full sm:relative ">
      <div className="flex justify-between items-center mx-auto max-w-7xl ">
        <p className="text-3xl text-primary font-extralight">Your Day</p>
        <MenuItems />
        <SwitchTheme />
      </div>
    </header>
  );
}
