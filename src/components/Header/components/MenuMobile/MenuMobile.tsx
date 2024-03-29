import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaReadme } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import SettingsButton from "@/components/SettingsButton/SettingsButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  icon: JSX.Element;
  href: string;
}

const MenuItems: MenuItem[] = [
  {
    title: "Home",
    icon: <FaHome className="text-3xl" />,
    href: "/",
  },
  {
    title: "Profile",
    icon: <FaUser className="text-3xl" />,
    href: "/profile",
  },
  {
    title: "Write",
    icon: <PiPencilSimpleLineFill className="text-3xl" />,
    href: "/write",
  },
  {
    title: "Read",
    icon: <FaReadme className="text-3xl" />,
    href: "/read",
  },
];

export default function MenuMobile() {
  const router = usePathname();

  return (
    <ul className="text-white gap-2 font-medium sm:hidden mx-auto flex relative rounded  z-10">
      {MenuItems.map((menuItem) => (
        <li
          className={` p-4 delay-100  border-b-[4px] 
        ${router === menuItem.href ? "  border-white  cursor-none" : " border-transparent"}
      `}
          key={menuItem.title}
        >
          <Link href={menuItem.href}>{menuItem.icon}</Link>
        </li>
      ))}
      <SettingsButton />
    </ul>
  );
}
