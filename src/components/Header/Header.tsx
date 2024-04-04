"use client";
import SwitchTheme from "../ThemeSwtich/SwitchTheme";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import SettingsButton from "../SettingsButton/SettingsButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="   sm:py-5 sm:px-5 bg-test sm:bg-primary shadow-2xl z-10 fixed sm:relative   top-0 w-full sm:rounded-none  ">
      <div className="flex justify-between items-center mx-auto max-w-7xl z-10 ">
        <Link href={"/"}>
          <p className="text-3xl text-primary font-extralight sm:block hidden">
            Your Day
          </p>
        </Link>
        <MenuDesktop />
        <MenuMobile />
        <div className="sm:block hidden">
          <SettingsButton />
        </div>
      </div>
    </header>
  );
}
