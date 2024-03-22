import ButtonLogin from "./ButtonLogin";
import { ButtonLoginProps } from "./ButtonLogin";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";

export default {
  title: "Buttons/SocialButtons",
  component: ButtonLogin,
  args: {
    title: "Entrar com o Google",
    icon: <FaGoogle />,
    color: "#4285F4",
  } as ButtonLoginProps,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          width: "300px",
          height: "70px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    title: "Entrar com o Google",
    icon: <FaGoogle />,
    color: "#4285F4",
    onClick: () => {
      console.log("Clicou");
    },
  },
};

export const Twitter = {
  args: {
    title: "Entrar com o Twitter",
    icon: <FaTwitter />,
    color: "#4285F4",
    onClick: () => {
      console.log("Clicou");
    },
  },
};

export const Facebook = {
    args: {
      title: "Entrar com o Twitter",
      icon: <FaFacebook/>,
      color: "#4285F4",
      onClick: () => {
        console.log("Clicou");
      },
    },
  };
  
