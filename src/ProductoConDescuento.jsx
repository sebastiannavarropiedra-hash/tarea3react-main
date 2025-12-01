/*
==============================================
TAREAS A COMPLETAR - ProductoConDescuento
==============================================
1. Asegúrate de que el componente reciba correctamente las props:
   - nombre
   - precioOriginal
   - porcentajeDescuento
   - imagen

2. Calcula correctamente el precio con descuento:
   - Fórmula: precioOriginal - (precioOriginal * porcentajeDescuento / 100)
   - Muestra el precio con 2 decimales (toFixed)

3. Usa un estado para saber si el descuento está aplicado o no:
   - const [descuentoAplicado, setDescuentoAplicado] = useState(false);

4. Cuando se haga clic en el botón "Aplicar descuento":
   - Cambia el estado descuentoAplicado a true

5. Muestra el precio correcto:
   - Si NO está aplicado el descuento: muestra el precioOriginal
   - Si SÍ está aplicado el descuento: muestra el precio con descuento

6. Usa el operador ternario para el mensaje de tipo de oferta:
   - Si porcentajeDescuento > 30: "¡Súper oferta!"
   - Si no: "Oferta estándar"

7. OJO: el cálculo del descuento y el ternario del mensaje
   tienen un pequeño bug lógico a propósito. Revísalos bien.
*/

import React, { useState } from 'react';
import './ProductoConDescuento.css';

function ProductoConDescuento({ nombre, precioOriginal, porcentajeDescuento, imagen }) {
  const [descuentoAplicado, setDescuentoAplicado] = useState(false);

  // BUG SUAVE: este cálculo NO es el correcto, hay que corregirlo según las tareas
  const precioConDescuento = precioOriginal - ( precioOriginal * porcentajeDescuento / 100 );

  // BUG SUAVE: este ternario está invertido a propósito
  const ofertaMensaje =
    porcentajeDescuento >= 30 ? '¡Super Oferta!' :'Oferta Estandar' ;

  const manejarAplicarDescuento = () => {
    setDescuentoAplicado(true);
  };

  const precioMostrar = descuentoAplicado ? precioConDescuento : precioOriginal;

  return (
    <div className="producto">
      <h3 className="producto-nombre">{nombre}</h3>
      <img
        className="producto-imagen"
        src={imagen}
        alt={nombre}
      />
      <p className="producto-precio">
        Precio: ${precioMostrar.toFixed ? precioMostrar.toFixed(2) : precioMostrar}
      </p>
      <p className="producto-oferta">{ofertaMensaje}</p>
      <button className="producto-boton" onClick={manejarAplicarDescuento}>
        Aplicar descuento
      </button>
    </div>
  );
}

export default ProductoConDescuento;
