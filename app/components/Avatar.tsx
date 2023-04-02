"use client";
import Image from "next/image";
import React from "react";

type Props = {
  src?: string | null | undefined;
};

const Avatar = ({ src }: Props) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      src={src || "/images/placeholder.jpg"}
      alt="avatar"
    />
  );
};

export default Avatar;
