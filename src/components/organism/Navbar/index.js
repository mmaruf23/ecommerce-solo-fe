import Button from "@/components/atoms/Button";
import SearchBar from "@/components/atoms/Search";
import { Home, LayoutGrid, Menu, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full flex justify-center shadow sticky top-0 z-10">
        <div className="w-full xl:w-[1280px] flex items-center justify-between py-3 px-4 bg-white">
          <div className="hidden md:block">
            <p>LOGO</p>
          </div>

          <Home onClick={() => router.push("/")} />
          <LayoutGrid />
          <SearchBar />
          <Link href={"/cart"}>
            <ShoppingCart />
          </Link>
          <div className="flex items-center justify-between border-l py-1 px-4">
            <Menu onClick={() => {
              setIsOpen(true);
            }} />
          </div>
        </div>
        <div className={`fixed bg-white max-w-[1280px] w-svw min-h-svh z-20 top-0 ${isOpen ? "block" : "hidden"}`}>
          <div className="flex gap-3 p-5">
            <Plus className="rotate-45" onClick={() => setIsOpen(false)} />
            <p>Close</p>
          </div>
          <div className="flex justify-center mt-6 gap-4 px-5">
            <Link href={"/login"} className={"bg-red-600 text-white w-full text-center p-4"}>Masuk</Link>
            <Link href={"/register"} className={"border w-full text-center p-4"}>Daftar</Link>
          </div>
        </div>
      </div>

    </>
  );
};
