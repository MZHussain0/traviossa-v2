"use client";
import useSearchModal from "@/app/hooks/useSearchModal";
import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Search = (props: Props) => {
  const searchModal = useSearchModal();
  return (
    <div
      onClick={searchModal.onOpen}
      className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-xs font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-xs font-semibold px-6 flex-1 text-center border-x">
          Any week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-400 flex flex-row items-center gap-3">
          <div className="hidden sm:block text-xs">Add Guests</div>
          <div className="p-1 bg-purple-500 rounded-full text-white">
            <BiSearch size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
