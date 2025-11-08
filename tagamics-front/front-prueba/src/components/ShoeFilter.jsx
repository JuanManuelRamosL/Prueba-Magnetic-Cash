import React, { useState, useEffect } from "react";
import "./ShoeFilter.css";

export default function ShoeFilter({ brands, onFilter }) {
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  useEffect(() => {
    onFilter({
      brand,
      minPrice: minPrice ? parseFloat(minPrice) : null,
      maxPrice: maxPrice ? parseFloat(maxPrice) : null,
    });
  }, [brand, minPrice, maxPrice, onFilter]);

  return (
    <div className="filter-container">
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="options-filter"
      >
        <option value="">Todas las marcas</option>
        {brands.map((b) => (
          <option key={b} value={b} className="option">
            {b}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Precio mínimo"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="price"
      />
      <input
        type="number"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="price"
      />
    </div>
  );
}
