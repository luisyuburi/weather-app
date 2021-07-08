import React from "react";
import PropTypes from "prop-types";

const Clima = (props) => {
  // Extraer los valores
  if (!props.resultado.name || !props.resultado.main) return null;

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {props.resultado.name} es </h2>
        <p className="temperatura">
          {parseFloat(props.resultado.main.temp - kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103; </span>
        </p>
        <p>
          {" "}
          Temperatura Maxima:
          {parseFloat(props.resultado.main.temp_max - kelvin, 10).toFixed(
            2
          )}{" "}
          <span> &#x2103; </span>
        </p>
        <p>
          {" "}
          Temperatura Minima:
          {parseFloat(props.resultado.main.temp_min - kelvin, 10).toFixed(
            2
          )}{" "}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Clima;
