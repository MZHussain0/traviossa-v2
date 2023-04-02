﻿import prismaClient from "@/app/libs/prismaDb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prismaClient.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
