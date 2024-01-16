import { useEffect, useState } from "react";
import Header from "./components/header";
import Modal from "./components/Modal";
import Mensaje from "./components/Mensaje";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Filtros from "./components/Filtros";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [gastosFiltrados, setGastosFiltrados] = useState(gastos);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      openModal();
      console.log("nuevo editar...");
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
    if (presupuesto == 0) {
      setIsValidPresupuesto(false);
    }
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);
  useEffect(() => {
    if (filtro) {
      const tmpGastos = gastos.filter((gasto) => gasto.categoria === filtro);
      setGastosFiltrados(tmpGastos);
    } else {
      setGastosFiltrados(gastos);
    }
  }, [filtro, gastos]);

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
      setGastoEditar({});
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
  function handleDelete(id) {
    const copyGastos = gastos.filter((gasto) => gasto.id != id);
    setGastos(copyGastos);
  }
  return (
    <div className={modal ? "fijal" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        setGastos={setGastos}
      />

      {isValidPresupuesto && (
        <>
          <main>
            {success && <Mensaje tipo={"success"}>{success}</Mensaje>}
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastosFiltrados}
              setGastoEditar={setGastoEditar}
              handleDelete={handleDelete}
            />
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
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
