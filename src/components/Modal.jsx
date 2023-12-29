/* eslint-disable react/prop-types */
import CerrarBtn from "../img/cerrar.svg";
export default function Modal({ setModal, animarModal, setAnimarModal }) {
  function ocultarModal() {
    setModal(false);
    setAnimarModal(false);
  }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal [X]" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? "animar" : ""}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
}
