import SearchBar from "@/components/atoms/Search";
import { LayoutGrid, Menu, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full xl:w-[1280px] flex items-center justify-between py-3 px-4 bg-white">
      <div>
        <p>LOGO</p>
      </div>
      <LayoutGrid />
      <SearchBar />
      <ShoppingCart />
      <div className="flex items-center justify-between border-l py-1 px-4">
        <Menu />
      </div>
    </div>
  );
};
