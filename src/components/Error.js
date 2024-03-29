import React from "react";
import PropTypes from "prop-types";

const Error = (props) => {
  return <p className="red darken-4 error">{props.mensaje}</p>;
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
export default Error;
