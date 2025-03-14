import React, { useState } from "react";

const ProfilePage = () => {
  const user = {
    username: "makari",
    name: "Makari Qontak",
    email: "makari@example.com",
    role: "User",
    createdAt: "2024-01-15T10:00:00Z",
  };

  const orders = [
    {
      id: 1,
      status: "Completed",
      totalPrice: 150,
      date: "2024-02-20T14:30:00Z",
      products: [
        { name: "Laptop", price: 1000, quantity: 1 },
        { name: "Mouse", price: 50, quantity: 2 },
      ],
    },
    {
      id: 2,
      status: "Pending",
      totalPrice: 200,
      date: "2024-03-01T10:00:00Z",
      products: [
        { name: "Keyboard", price: 120, quantity: 1 },
        { name: "Headset", price: 80, quantity: 1 },
      ],
    },
    {
      id: 3,
      status: "Shipped",
      totalPrice: 300,
      date: "2024-03-05T16:00:00Z",
      products: [
        { name: "Monitor", price: 300, quantity: 1 },
      ],
    },
  ];

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredOrders = filterStatus === "All" ? orders : orders.filter(order => order.status === filterStatus);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="border-b pb-4 mb-4">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Created At:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Riwayat Order</h3>
      <div className="mb-4">
        <label className="mr-2">Filter Status:</label>
        <select className="border p-2 rounded" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
        </select>
      </div>

      {filteredOrders.length > 0 ? (
        <ul className="space-y-3">
          {filteredOrders.map((order) => (
            <li
              key={order.id}
              className="border p-3 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedOrder(order)}
            >
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> ${order.totalPrice}</p>
              <p><strong>Tanggal:</strong> {new Date(order.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Belum ada riwayat order dengan status {filterStatus}.</p>
      )}

      {selectedOrder && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold">Detail Order ID: {selectedOrder.id}</h3>
          <p><strong>Status:</strong> {selectedOrder.status}</p>
          <p><strong>Total:</strong> ${selectedOrder.totalPrice}</p>
          <p><strong>Tanggal:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
          <h4 className="mt-3 font-semibold">Produk:</h4>
          <ul className="list-disc pl-5">
            {selectedOrder.products.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price} x {product.quantity}
              </li>
            ))}
          </ul>
          <button
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedOrder(null)}
          >
            Tutup Detail
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;