import ButtonLoginT from "./ButtonLogin";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

export default {
  title: "Buttons/SocialButtons",
  component: ButtonLoginT,

  decorators: [
    (Story: any) => (
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
    color: "#ea4335",
  },
};

export const Twitter = {
  args: {
    title: "Entrar com o Twitter",
    icon: <FaXTwitter />,
    color: "#191919",
  },
};

export const Facebook = {
  args: {
    title: "Entrar com o Facebook",
    icon: <FaFacebook />,
    color: "#0866ff",
  },
};
