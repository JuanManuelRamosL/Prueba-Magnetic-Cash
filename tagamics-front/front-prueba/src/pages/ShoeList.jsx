import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import ShoeFilter from "../components/ShoeFilter";
import "./ShoeList.css";

export default function ShoeList() {
  const [shoes, setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    fetchShoes();
  }, []);

  async function fetchShoes() {
    try {
      setLoading(true);
      const res = await api.get("/shoes/");
      setShoes(res.data);
      setFilteredShoes(res.data);
    } catch (err) {
      console.error("Error fetching shoes", err);
    } finally {
      setLoading(false);
    }
  }

  function handleFilter(filters) {
    let filtered = [...shoes];

    if (filters.search) {
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.brand) {
      filtered = filtered.filter((s) => s.brand === filters.brand);
    }

    if (filters.minPrice != null) {
      filtered = filtered.filter((s) => s.price >= filters.minPrice);
    }

    if (filters.maxPrice != null) {
      filtered = filtered.filter((s) => s.price <= filters.maxPrice);
    }

    setFilteredShoes(filtered);
    setCurrentPage(1); // volver a la primera página
  }

  async function handleDelete(id) {
    if (!confirm("Eliminar esta zapatilla?")) return;
    try {
      await api.delete(`/shoes/${id}/`);
      const updatedShoes = shoes.filter((x) => x.id !== id);
      setShoes(updatedShoes);
      handleFilter({}); // aplicar filtros de nuevo
    } catch (err) {
      console.error("Error deleting", err);
      alert("No se pudo eliminar");
    }
  }

  // Paginación
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentShoes = filteredShoes.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredShoes.length / itemsPerPage);

  function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  }

  // Obtener lista de marcas únicas
  const brands = [...new Set(shoes.map((s) => s.brand))];

  return (
    <div>
      <h2 className="title">Listado de zapatillas</h2>

      <ShoeFilter brands={brands} onFilter={handleFilter} />

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="grid">
            {currentShoes.length === 0 && <p>No hay zapatillas cargadas.</p>}
            {currentShoes.map((shoe) => (
              <article key={shoe.id} className="card">
                <h3 className="title-product">{shoe.name}</h3>
                <p>
                  <strong>Marca:</strong> {shoe.brand}
                </p>
                <p>
                  <strong>Precio:</strong> ${shoe.price}
                </p>
                <div className="card-actions">
                  <Link to={`/shoes/${shoe.id}`} className="btn small">
                    Ver
                  </Link>
                  <button
                    className="btn small danger"
                    onClick={() => handleDelete(shoe.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Paginación */}
          {filteredShoes.length > itemsPerPage && (
            <div className="pagination">
              <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                « Anterior
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => goToPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                Siguiente »
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
