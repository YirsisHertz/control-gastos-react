import { FormEvent, useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}: any) => {
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e: any) => setPresupuesto(Number(e.target.value));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) <= 0) {
      setMensaje("Presupuesto Invalido");
      return;
    }

    setMensaje("");
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contador-presupuesto contenedor sombra">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade el Presupuesto"
            value={presupuesto}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Añadir Presupuesto</button>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
