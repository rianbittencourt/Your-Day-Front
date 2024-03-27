"use client";
import SwitchTheme from "../ThemeSwtich/SwitchTheme";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import SettingsButton from "../SettingsButton/SettingsButton";

export default function Header() {
  return (
    <header className="   sm:py-5 sm:px-5 bg-secondary shadow-2xl z-10  fixed bottom-0 w-full sm:relative sm:rounded-none rounded-t-[2rem] ">
      <div className="flex justify-between items-center mx-auto max-w-7xl z-10 ">
        <p className="text-3xl text-primary font-extralight sm:block hidden">
          Your Day
        </p>
        <MenuDesktop />
        <MenuMobile />
        <div className="sm:block hidden">
          <SettingsButton />
        </div>
      </div>
    </header>
  );
}
