/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatMoney } from "../helpers";
import { useEffect, useState } from "react";
export default function ControlPresupuesto({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
}) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;
    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos]);
  function handleReset() {
    const resultado = confirm("Deseas reiniciar el presupuesto y los gastos?");
    if (resultado) {
      setGastos([]);
      setPresupuesto(0);
    }
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={(gastado * 100) / presupuesto}
          text={`${((gastado * 100) / presupuesto).toFixed(2)}` + "% Gastado"}
          styles={buildStyles({
            pathColor: disponible < 0 ? "#d62626" : "#3b82f6",
            trailColor: "#F7F9F9",
            pathTransitionDuration: 1,
            textColor: "#3b82f6",
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleReset}>
          Resetear APP
        </button>
        <p>
          <span>Presupuesto: </span>
          {formatMoney(presupuesto)}
        </p>
        <p className={`${disponible > 0 ? "negativo" : ""}`}>
          <span>Cantidad Gastada: </span>
          {formatMoney(gastado)}
        </p>
        <p>
          <span>Cantidad Disponible: </span>
          {formatMoney(disponible)}
        </p>
      </div>
    </div>
  );
}

ControlPresupuesto.propTypes = {
  gastos: PropTypes.arrayOf(
    PropTypes.shape({
      categoria: PropTypes.string,
      nombre: PropTypes.string,
      cantidad: PropTypes.number,
      id: PropTypes.string,
      fecha: PropTypes.number,
    })
  ),
  presupuesto: PropTypes.number,
  setPresupuesto: PropTypes.func,
  setGastos: PropTypes.func,
};
