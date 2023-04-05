"use client";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClicK: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  label,
  onClicK,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClicK}
      disabled={disabled}
      className={`relative text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
      ${outline ? "bg-slate-700" : "bg-purple-500"}
      ${outline ? "border-white" : "border-purple-500"}
      ${
        small
          ? "py-1 text-sm font-light border"
          : "py-3 text-lg font-semibold border-2"
      }
      `}>
      {Icon && <Icon size={26} className="absolute left-4 top-4" />}
      {label}
    </button>
  );
};

export default Button;
