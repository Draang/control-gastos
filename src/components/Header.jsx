import NuevoPresupuesto from "./NuevoPresupuesto";
export default function Header({ presupuesto, setPresupuesto }) {
  return (
    <header>
      <h1>Control de gastos</h1>
      <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </header>
  );
}
