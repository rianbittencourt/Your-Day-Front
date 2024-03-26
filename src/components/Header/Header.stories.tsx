import SwitchTheme from "./Header";
import { ThemeProvider } from "../../hooks/ThemeContext";
import React from "react";

export default {
  title: "Layouts/Header",
  component: SwitchTheme,

  decorators: [
    (Story: any) => (
      <ThemeProvider initialTheme="dark">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <SwitchTheme />;
