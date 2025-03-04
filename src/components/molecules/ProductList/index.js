import Image from "next/image";

export default function List() {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center space-x-4">
        <Image src="" alt="Product" className="w-20 h-20 object-cover rounded-md" />
        <div>
          <h2 className="text-lg font-semibold">Nama Produk</h2>
          <p className="text-gray-600">Rp 100.000</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-2 py-1 border rounded">-</button>
        <span className="px-3">1</span>
        <button className="px-2 py-1 border rounded">+</button>
        <button className="text-red-500 hover:text-red-700">Hapus</button>
      </div>
    </div>
  );
};
