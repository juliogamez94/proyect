import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

function ContactoComponent({ contacto }) {
  return (
    <div>
      <h2>Nombre: {contacto.nombre} </h2>
      <h3> Apellido: {contacto.apellido} </h3>
      <h4>Email:{contacto.email} </h4>
      <h5>Conectado:{contacto.conectado ? " Conectado" : "Desconectado"} </h5>
    </div>
  );
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ContactoComponent;
