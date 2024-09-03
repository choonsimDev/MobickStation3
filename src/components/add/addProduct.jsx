"use client";

import { useState } from "react";

export default function AddProduct({ categories = [], stores = [] }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(""); // 초기값을 빈 문자열로 설정
  const [mileage, setMileage] = useState(""); // 초기값을 빈 문자열로 설정
  const [stock, setStock] = useState(""); // 초기값을 빈 문자열로 설정
  const [imageUrl, setImageUrl] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [storeName, setStoreName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price: parseFloat(price) || 0, // 숫자로 변환, 실패시 0
        mileage: parseFloat(mileage) || 0, // 숫자로 변환, 실패시 0
        stock: parseInt(stock) || 0, // 숫자로 변환, 실패시 0
        imageUrl,
        categoryName,
        storeName,
      }),
    });

    if (res.ok) {
      alert("Product added successfully!");
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mileage</label>
          <input
            type="number"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Store</label>
          <select
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          >
            <option value="">Select Store</option>
            {stores.map((store) => (
              <option key={store.id} value={store.name}>
                {store.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
