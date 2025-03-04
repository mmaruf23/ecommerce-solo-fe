import { useState } from "react";

export default function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: null,
  });

  const categories = ["Elektronik", "Fashion", "Makanan", "Kesehatan", "Olahraga"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Produk:", product);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Input Data Produk Baru</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Nama Produk" className="w-full p-2 border rounded" value={product.name}
          onChange={handleChange} required />
        <textarea name="description" placeholder="Deskripsi" className="w-full p-2 border rounded"
          value={product.description} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Harga" className="w-full p-2 border rounded" value={product.price}
          onChange={handleChange} required />
        <select name="category" className="w-full p-2 border rounded" value={product.category} onChange={handleChange}
          required>
          <option value="">Pilih Kategori</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input type="number" name="stock" placeholder="Stok" className="w-full p-2 border rounded" value={product.stock}
          onChange={handleChange} required />
        <input type="file" name="image" className="w-full p-2 border rounded" onChange={handleFileChange} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Simpan Produk
        </button>
      </form>
    </div>
  );
}