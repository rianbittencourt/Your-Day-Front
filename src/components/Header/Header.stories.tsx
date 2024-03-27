import SwitchTheme from "./Header";
import { ThemeProvider } from "../../hooks/ThemeContext";
import React from "react";

export default {
  title: "Layouts/Header",
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
