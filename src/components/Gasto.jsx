import PropTypes from "prop-types";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

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

export default function Gasto({ gasto, setGastoEditar, handleDelete }) {
  const { categoria, nombre, cantidad, fecha, id } = gasto;
  function leadingAction() {
    return (
      <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
      </LeadingActions>
    );
  }
  function trailingAction() {
    return (
      <TrailingActions>
        <SwipeAction
          onClick={() => {
            handleDelete(id);
          }}
          destructive={true}
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
    );
  }
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingAction()}
        trailingActions={trailingAction()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
}

Gasto.propTypes = {
  gasto: PropTypes.shape({
    cantidad: PropTypes.number,
    categoria: PropTypes.string,
    fecha: PropTypes.number,
    id: PropTypes.string,
    nombre: PropTypes.string,
  }),
  setGastoEditar: PropTypes.func,
  handleDelete: PropTypes.func,
};
