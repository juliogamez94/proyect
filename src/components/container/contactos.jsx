import { Contacto } from "../../models/contacto.class";
import ContactoComponent from "../pure/ContactoComponent";

const Contactos = () => {
  const contactoDefault = new Contacto(
    "Julio",
    "Gamez",
    "juliogamezb@gmail.com",
    true
  );
  return (
    <div>
      <h1>Tus Contactos:</h1>
      <ContactoComponent contacto={contactoDefault} />
    </div>
  );
};

export default Contactos;
