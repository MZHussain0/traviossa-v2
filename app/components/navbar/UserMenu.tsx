﻿"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

type Props = {};

const UserMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden sm:block py-3 px-4 text-sm font-semibold rounded-full hover:bg-slate-700 transition cursor-pointer ">
          lend your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-slate-700 flex flex-row items-center gap-3 rounded-full cursor-pointer shadow-white hover:shadow-md hover:scale-105  transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[30vw] md:w-[3/4] overflow-hidden right-0 top-12 text-sm bg-slate-700 ">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="SignUp" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;