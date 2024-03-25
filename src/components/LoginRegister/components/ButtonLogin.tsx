"use client";
import React from "react";

interface ButtonLoginProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

export default function ButtonLoginT({
  title,
  icon,
  color,
  onClick,
}: ButtonLoginProps) {
  return (
    <a
      style={{ backgroundColor: color }}
      className={`flex justify-center items-center  p-3 m-3 rounded-lg  cursor-pointer  text-white hover:opacity-90 delay-75`}
      onClick={onClick}
    >
      <div className="text-2xl flex justify-center items-center mr-3 fill-white ">
        {icon}
      </div>
      <p className="text-base font-normal">{title}</p>
    </a>
  );
}
