import PropTypes from "prop-types";
import Gasto from "./Gasto";
export default function ListadoGastos({ gastos }) {
  return (
    <div className="listado-gastos contenedor">
      {gastos.length ? <h2>Gastos</h2> : <h2>No hay gastos</h2>}
      {gastos.map((gasto) => (
        <Gasto gasto={gasto} key={gasto.id} />
      ))}
    </div>
  );
}

ListadoGastos.propTypes = {
  gastos: PropTypes.arrayOf(
    PropTypes.shape({
      categoria: PropTypes.string,
      nombre: PropTypes.string,
      cantidad: PropTypes.number,
      id: PropTypes.string,
      fecha: PropTypes.number,
    })
  ),
};
