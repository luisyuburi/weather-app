import React from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  // state del formulario
  const [error, guardarError] = React.useState(false);

  // Funcion que coloca los elementos en el state

  const handleChange = (e) => {
    // Actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario le da submit al form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (busqueda.ciudad.trim() === "" || busqueda.ciudad.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Pasar al componente principal
    guardarConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={busqueda.ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad</label>
      </div>
      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          value={busqueda.pais}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un pais</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="CA">Canada</option>
          <option value="ES">España</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="PE">Perú</option>
          <option value="VE">Venezuela</option>
        </select>
        <label htmlFor="pais">Pais</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired,
};

export default Formulario;
