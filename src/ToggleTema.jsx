/*
==============================================
TAREAS A COMPLETAR - ToggleTema
==============================================
1. Crea un estado booleano para el tema:
   const [esOscuro, setEsOscuro] = useState(false);

2. Crea la función manejarToggleTema que cambie el valor de esOscuro:
   - Si es false -> true
   - Si es true  -> false

3. Usa clases condicionales según esOscuro:
   - Si esOscuro es true: usar clase "tarjeta tarjeta-oscura"
   - Si esOscuro es false: usar clase "tarjeta tarjeta-clara"

4. Usa un operador ternario para el texto del botón:
   - Si esOscuro es true: "Cambiar a modo claro"
   - Si esOscuro es false: "Cambiar a modo oscuro"

5. OJO: el texto del botón está al revés a propósito, revísalo.

6. Muestra las props titulo y descripcion en la tarjeta.
*/

import React, { useState } from 'react';
import './ToggleTema.css';

function ToggleTema({ titulo, descripcion }) {
  const [esOscuro, setEsOscuro] = useState(false);

  const manejarToggleTema = () => {
    setEsOscuro(!esOscuro);
  };

  const clasesTarjeta = esOscuro ? 'tarjeta tarjeta-oscura' : 'tarjeta tarjeta-clara';

  // BUG SUAVE: el texto está invertido a propósito
  const textoBoton = esOscuro ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro';

  return (
    <div className={clasesTarjeta}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button onClick={manejarToggleTema}>{textoBoton}</button>
    </div>
  );
}

export default ToggleTema;
