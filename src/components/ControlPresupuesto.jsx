/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ControlPresupuesto({ presupuesto, setPresupuesto }) {
  function formatMoney(cantidad) {
    return cantidad.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatMoney(presupuesto)}
        </p>
        <p>
          <span>Cantidad Gastada: </span>
          {formatMoney(0)}
        </p>
        <p>
          <span>Cantidad Disponible: </span>
          {formatMoney(presupuesto)}
        </p>
      </div>
    </div>
  );
}
