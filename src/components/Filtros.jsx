import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Filtros({ filtro, setFiltro }) {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="filtro"> Filtro</label>
          <select
            name="filtro"
            id="filtro"
            onChange={(e) => setFiltro(e.target.value)}
            value={filtro}
          >
            <option value="">--SELECCIONE--</option>
            <option value="ahorro">Ahorro 🐖</option>
            <option value="comida">Comida 🍽️</option>
            <option value="casa">Casa 🏠</option>
            <option value="ocio">Ocio 🎉</option>
            <option value="transporte">Transporte 🚌</option>
            <option value="salud">Salud 💪🏼</option>
            <option value="servicios">Servicios 📝</option>
          </select>
        </div>
      </form>
    </div>
  );
}

Filtros.propTypes = {
  filtro: PropTypes.string,
  setFiltro: PropTypes.func,
};
