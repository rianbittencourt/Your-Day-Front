import React from "react";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface Props {
  toggleTheme: () => void;
}

export default function SwitchTheme({ toggleTheme }: Props) {
  return (
    <div>
      <Switch
        onChange={toggleTheme}
        checked={false}
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
