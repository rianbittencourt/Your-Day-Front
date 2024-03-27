import SwitchTheme from "./SwitchTheme";
import { ThemeProvider } from "../../hooks/ThemeContext";
import React from "react";

export default {
  title: "Switchs/SwitchTheme",
  component: SwitchTheme,

  decorators: [
    (Story: any) => (
      <ThemeProvider >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <SwitchTheme />;
