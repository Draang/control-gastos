import PropTypes from "prop-types";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import { formatearFecha, formatMoney } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  ocio: IconoOcio,
  transporte: IconoGastos,
  salud: IconoSalud,
  servicios: IconoSuscripciones,
};
export default function Gasto({ gasto }) {
  const { categoria, nombre, cantidad, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={diccionarioIconos[categoria]} alt={categoria} />
        <div className="descripcion-gasto">
          <div className="categoria">
            <p>{categoria}</p>
            <p className="nombre-gasto"> {nombre}</p>
            <p className="fecha-gasto">
              Agregado el: <span>{formatearFecha(fecha)}</span>
            </p>
          </div>
        </div>
      </div>
      <p className="cantidad-gasto">{formatMoney(cantidad)}</p>
    </div>
  );
}

Gasto.propTypes = {
  gasto: PropTypes.shape({
    categoria: PropTypes.string,
    nombre: PropTypes.string,
    cantidad: PropTypes.number,
    id: PropTypes.string,
    fecha: PropTypes.number,
  }),
};
