import React from "react";
import LoginRegister from "./LoginRegister";
import { ThemeProvider } from "../../hooks/ThemeContext";

export default {
  title: "Layouts/LoginRegister",
  component: LoginRegister,

  decorators: [
    (Story: any) => (
      <ThemeProvider >
        <div className="h-screen">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <LoginRegister />;
