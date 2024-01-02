import { useState } from "react";
import Header from "./components/header";
import Modal from "./components/Modal";
import Mensaje from "./components/Mensaje";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [success, setSuccess] = useState("");
  function handleNuevoGasto() {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 150);
  }
  function saveGasto(gasto) {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setSuccess(gasto.nombre);
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }
  return (
    <div className={modal ? "fijal" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            {success && (
              <Mensaje tipo={"success"}>{`Gasto ${success} anadidio`}</Mensaje>
            )}
            <ListadoGastos gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Nuevo Gasto +"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          saveGasto={saveGasto}
        />
      )}
    </div>
  );
}

export default App;
