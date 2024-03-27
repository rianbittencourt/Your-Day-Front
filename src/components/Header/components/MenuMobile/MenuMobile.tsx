import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaReadme } from "react-icons/fa6";
import SettingsButton from "@/components/SettingsButton/SettingsButton";

export default function MenuMobile() {
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
      <SettingsButton />
    </ul>
  );
}
