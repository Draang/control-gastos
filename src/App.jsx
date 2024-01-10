import { useEffect, useState } from "react";
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
  const [gastoEditar, setGastoEditar] = useState({});
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      openModal();
      console.log("nuevo editar...");
    }
  }, [gastoEditar]);
  function openModal() {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 150);
  }
  function handleNuevoGasto() {
    setGastoEditar({});
    openModal();
  }
  function saveGasto(gasto) {
    let msgSuccess = "";
    if (gasto.id) {
      const copyGastos = gastos.map((v) => (v.id == gasto.id ? gasto : v));
      setGastos(copyGastos);
      msgSuccess = `Gasto ${gasto.nombre} editado`;
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
      msgSuccess = `Gasto ${gasto.nombre} añadido`;
    }

    setSuccess(msgSuccess);
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
            {success && <Mensaje tipo={"success"}>{success}</Mensaje>}
            <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} />
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
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App;
