import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ShoeList from "./pages/ShoeList";
import ShoeCreate from "./pages/ShoeCreate";
import ShoeDetail from "./pages/ShoeDetail";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* <h1>Tagamics - Zapatillas</h1> */}
      <nav className="nav">
        <div className="container-left">
          <img src="/public/magneticash_logo.jpeg" alt="Logo" className="logo"/>
        </div>
        <div className="container-right">
          <Link to="/" className="btn">Listado</Link>
          <Link to="/new" className="btn">
            Agregar
          </Link>
        </div>
      </nav>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<ShoeList />} />
          <Route path="/new" element={<ShoeCreate />} />
          <Route path="/shoes/:id" element={<ShoeDetail />} />
        </Routes>
      </main>
    </div>
  );
}
