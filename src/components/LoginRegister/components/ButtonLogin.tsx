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
    <button
      style={{ backgroundColor: color }}
      className={`flex justify-center items-center p-3 m-3 rounded-lg border border-gray-300 cursor-pointer w-full text-white hover:opacity-80`}
      onClick={onClick}
    >
      <div className="text-2xl flex justify-center items-center mr-3">
        {icon}
      </div>
      <p className="text-base font-normal">{title}</p>
    </button>
  );
}
