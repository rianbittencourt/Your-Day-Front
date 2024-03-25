"use client";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext.jsx";

export default function SwitchTheme(s) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <Switch
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={30}
        handleDiameter={20}
        offColor="#000000"
        onColor="#000000"
        onHandleColor="#000000"
        offHandleColor="#000000"
      />
    </div>
  );
}
