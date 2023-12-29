import { useState } from "react";
import Mensaje from "./Mensaje";
export default function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  const [error, setError] = useState("");
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setError("no es presupuesto valido");
    } else {
      setIsValidPresupuesto(true);
      setError("");
    }
  };
  return (
    <div className="contenedor'presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añdir" />
        {error && <Mensaje tipo={"error"}>{error}</Mensaje>}
      </form>
    </div>
  );
}
