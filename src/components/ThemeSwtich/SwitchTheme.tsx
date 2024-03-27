'use client';
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "@/hooks/ThemeContext";
import { MdLightMode, MdNightlight } from "react-icons/md";

export default function SwitchTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <Switch
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        className=" relative"
        uncheckedHandleIcon={
          <MdLightMode className="text-center mx-auto mt-1 text-[#333]" />
        }
        checkedHandleIcon={
          <MdNightlight className="text-center mx-auto mt-1 text-white" />
        }
        onColor="#f5f5f5"
        offColor="#333"
        onHandleColor="#333"
        offHandleColor="#F5F5F5"
      />
    </div>
  );
}
