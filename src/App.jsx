import React from 'react';
import './App.css';

import ProductoConDescuento from './ProductoConDescuento';
import ContadorLikes from './ContadorLikes';
import FormularioContacto from './FormularioContacto';
import ToggleTema from './ToggleTema';
import { useState } from 'react';

function App() {

  const [Likes, setLikes] = useState(0);


  return (



    <div className="app">
      <h1>Tarea de Componentes React</h1>
      <p className="app-descripcion">
        Completa las tareas indicadas en cada componente.
        Arregla los pequeños bugs y haz que todo funcione correctamente.
      </p>

      <div className="seccion">
        <h2>1. Producto con Descuento</h2>
        <ProductoConDescuento
          nombre="Laptop Gamer"
          precioOriginal={1500}
          porcentajeDescuento={40}
          imagen="https://img.freepik.com/premium-photo/laptop-with-blank-white-screen-ready-use-as-placeholder-image_153912-402403.jpg?w=360"
        />
      </div>

      <div className="seccion">
        <h2>2. Contador de Likes</h2>
        <ContadorLikes />
      </div>

      <div className="seccion">
        <h2>3. Formulario de Contacto</h2>
        <FormularioContacto />
      </div>

      <div className="seccion">
        <h2>4. Toggle de Tema</h2>
        <ToggleTema
          titulo="Tarjeta de ejemplo"
          descripcion="Esta tarjeta puede cambiar entre modo claro y oscuro."
        />
      </div>
    </div>
  );
}

export default App;
