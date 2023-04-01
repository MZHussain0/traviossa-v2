import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-3xl font-bold underline bg-red-200">Hello worl!</div>
  );
}
