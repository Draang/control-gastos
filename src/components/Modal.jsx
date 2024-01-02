import PropTypes from "prop-types";
import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

export default function Modal({
  setModal,
  animarModal,
  setAnimarModal,
  saveGasto,
}) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState("");

  function ocultarModal() {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 100);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      cantidad < 0 ||
      categoria == "seleccione" ||
      nombre == "" ||
      categoria == ""
    ) {
      setError("No es un gasto valido");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setError("");
      saveGasto({ nombre, cantidad, categoria });
      ocultarModal();
    }
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal [X]" onClick={ocultarModal} />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : ""}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Añade el Nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            name="cantidad"
            id="cantidad"
            placeholder="Añade la cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Cantidad</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="seleccione">--SELECCIONE--</option>
            <option value="ahorro">Ahorro 🐖</option>
            <option value="comida">Comida 🍽️</option>
            <option value="casa">Casa 🏠</option>
            <option value="ocio">Ocio 🎉</option>
            <option value="transporte">Transporte 🚌</option>
            <option value="salud">Salud 💪🏼</option>
            <option value="servicios">Servicios 📝</option>
          </select>
        </div>
        <input type="submit" value="Añadir gasto" />
        {error && <Mensaje tipo="error">{error}</Mensaje>}
      </form>
    </div>
  );
}

Modal.propTypes = {
  animarModal: PropTypes.bool,
  saveGasto: PropTypes.func,
  setAnimarModal: PropTypes.func,
  setModal: PropTypes.func,
};
