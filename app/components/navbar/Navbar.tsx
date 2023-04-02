"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { safeUser } from "@/app/types";
import Categories from "./Categories";

type Props = {
  currentUser?: safeUser | null;
};

const Navbar = ({ currentUser }: Props) => {
  return (
    <div className="fixed w-full bg-gray-800 text-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
