import React from "react";
import LoginRegister from "./LoginRegister";
import { ThemeProvider } from "../../hooks/ThemeContext";

export default {
  title: "Pages/LoginRegister",
  component: LoginRegister,

  decorators: [
    (Story: any) => (
      <ThemeProvider initialTheme="dark">
        <div className="h-screen">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <LoginRegister />;
