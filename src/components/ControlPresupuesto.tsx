import React from "react";

const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}: any) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {presupuesto.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
          })}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
