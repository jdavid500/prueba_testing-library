import React from "react";
import PropTypes from "prop-types";

const NameTag = ({ nombre, apellido }) => (
  <div>
    <div>hola!</div>
    <div> nombre: {nombre}</div>
    <div> apellido: {apellido}</div>
  </div>
);

NameTag.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string
};
export default NameTag;
