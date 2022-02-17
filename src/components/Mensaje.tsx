const Mensaje = ({ children, tipo }: any) => {
  return <div className={`alerta ${tipo}`}>{children}</div>;
};

export default Mensaje;
