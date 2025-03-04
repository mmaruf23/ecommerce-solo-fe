import Button from "@/components/atoms/Button";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import { LayoutList } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  return (
    <div className="flex flex-col min-h-[100svh] items-center">
      <div className="w-full flex justify-center shadow sticky top-0 z-10">
        <Navbar />
      </div>
      {/* Main body */}
      <div className="flex gap-5 flex-col flex-grow w-full px-5 mt-16 max-w-[1280px]">
        <div className="flex justify-center">
          <div className="border rounded w-96 h-[400px]  flex items-center justify-center">
            Ini produk image ceritanya
          </div>
        </div>
        <p className="text-3xl">Nama Produk</p>
        <div className="flex gap-2 items-end shadow p-3">
          <LayoutList size={20} />
          <p>Category : <span className="ml-4">CategoryName</span></p>
        </div>
        <p className="text-4xl font-bold text-red-500 pb-5 border-b border-dotted">RpXX.XXX</p>
        <div>
          <p className="text-2xl py-3">Deskripsi</p>
          <li>Deskripsi detail Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque culpa tempora porro animi obcaecati accusamus tempore nobis quae esse.</li>
        </div>
        <div className="w-full h-auto mt-10 flex shadow-2xl rounded">
          <div className="2xl p-3">
            <p className="mb-3">Jumlah pembelian</p>
            <Button className={"bg-gray-300"} onClick={() => {setQty(qty < 2 ? qty : qty - 1)}}>-</Button>
            <input className="py-2 mx-2 w-16 rounded-lg border focus:outline-none text-center" type="number" value={qty} />
            <Button className={"bg-gray-300"} onClick={() => { setQty(qty + 1); }}>+</Button>
          </div>
          <div className="flex-grow flex justify-center items-center p-5">
            <Button className={"text-2xl w-full h-full bg-red-500 text-white"}>Add to Cart</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
