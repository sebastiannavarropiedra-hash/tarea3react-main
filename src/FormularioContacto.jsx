/*
==============================================
TAREAS A COMPLETAR - FormularioContacto
==============================================
1. Crea el estado para nombre, email y mensaje usando useState:
   const [nombre, setNombre] = useState('');
   const [email, setEmail] = useState('');
   const [mensaje, setMensaje] = useState('');

2. Crea las funciones para manejar el cambio de cada input:
   - manejarCambioNombre(evento) -> actualiza nombre con evento.target.value
   - manejarCambioEmail(evento)  -> actualiza email con evento.target.value
   - manejarCambioMensaje(evento) -> actualiza mensaje con evento.target.value

3. Conecta cada input con su estado y su onChange:
   - value={nombre} onChange={manejarCambioNombre}
   - value={email} onChange={manejarCambioEmail}
   - value={mensaje} onChange={manejarCambioMensaje}

4. Muestra los valores de los estados en la Vista Previa:
   - Descomenta {nombre}, {email} y {mensaje}

5. (Opcional) Valida que algún campo no esté vacío y muestra un mensaje:
   - Por ejemplo, si falta nombre: "Por favor escribe tu nombre"
*/

import React, { useState } from 'react';
import './FormularioContacto.css';

function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // De momento, no hay onSubmit, solo onChange
  const manejarCambioNombre = (evento) => {
    // TODO: Actualizar el estado nombre con evento.target.value
    // setNombre(evento.target.value);
  };

  const manejarCambioEmail = (evento) => {
    // TODO: Actualizar el estado email con evento.target.value
    // setEmail(evento.target.value);
  };

  const manejarCambioMensaje = (evento) => {
    // TODO: Actualizar el estado mensaje con evento.target.value
    // setMensaje(evento.target.value);
  };

  return (
    <div className="formulario-contacto-container">
      <h3>Formulario de Contacto</h3>

      <form className="formulario-contacto">
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre"
            // value={nombre}
            // onChange={manejarCambioNombre}
          />
        </div>

        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escribe tu email"
            // value={email}
            // onChange={manejarCambioEmail}
          />
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje"
            rows={4}
            // value={mensaje}
            // onChange={manejarCambioMensaje}
          />
        </div>
      </form>

      <div className="preview-contacto">
        <h4>Vista Previa:</h4>
        <p>
          <strong>Nombre:</strong> {/* {nombre} */}
        </p>
        <p>
          <strong>Email:</strong> {/* {email} */}
        </p>
        <p>
          <strong>Mensaje:</strong> {/* {mensaje} */}
        </p>
      </div>
    </div>
  );
}

export default FormularioContacto;
