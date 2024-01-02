import PropTypes from "prop-types";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
export default function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
}) {
  return (
    <header>
      <h1>Control de gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          gastos={gastos}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
}

Header.propTypes = {
  gastos: PropTypes.arrayOf(
    PropTypes.shape({
      categoria: PropTypes.string,
      nombre: PropTypes.string,
      cantidad: PropTypes.number,
      id: PropTypes.string,
      fecha: PropTypes.number,
    })
  ),
  isValidPresupuesto: PropTypes.bool,
  presupuesto: PropTypes.number,
  setIsValidPresupuesto: PropTypes.func,
  setPresupuesto: PropTypes.func,
};
