import List from "@/components/molecules/ProductList";
import Navbar from "@/components/organism/Navbar";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="space-y-4">
            {/* Contoh Item Cart */}
            <List />
            <List />
            <List />
          </div>

          {/* Total & Checkout */}
          <div className="mt-6 flex justify-between items-center">
            <span className="text-lg font-semibold">Total: Rp 300.000</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );

};
