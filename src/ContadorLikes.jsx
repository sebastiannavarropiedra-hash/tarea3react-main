/*
==============================================
TAREAS A COMPLETAR - ContadorLikes
==============================================
1. Importa useState desde React:
   import { useState } from 'react';

2. Crea un estado para los likes iniciando en 0:
   const [likes, setLikes] = useState(0);

3. Crea las funciones:
   - manejarLike: aumenta los likes en 1
   - manejarDislike: disminuye los likes en 1
     (Opcional: evita que baje de 0)

4. Muestra el número actual de likes en lugar de "0":
   Likes: {likes}

5. Usa el operador ternario para mostrar el tipo de popularidad:
   - Si likes >= 10: "Muy popular"
   - Si no: "Poco popular"

6. Revisa el ternario actual, tiene un pequeño detalle (> en lugar de >=).

7. Conecta los botones "Like" y "Dislike" con las funciones correspondientes:
   onClick={manejarLike}
   onClick={manejarDislike}
*/

import React, { useState } from 'react';
import './ContadorLikes.css';


function ContadorLikes() {
  const [likes, setLikes] = useState(0);

  const manejarLike = () => {
    if (likes >=0){setLikes(likes +1)};
  };

  const manejarDislike = () => {
    if (likes >0){setLikes(likes -1)}; // Podría quedar en negativo, pueden mejorar esto
  };

  // BUG SUAVE: aquí se usa > 10, las tareas piden >= 10
  const mensajePopularidad =
    likes >= 10 ? 'Muy popular' : 'Poco popular';

  return (
    <div className="contador">
      <p className="contador-likes">Likes: {likes}</p>
      <p className="contador-mensaje">{mensajePopularidad}</p>
      <div className="contador-botones">
        <button onClick={manejarLike}>Like</button>
        <button onClick={manejarDislike}>Dislike</button>
      </div>
    </div>
  );
}

export default ContadorLikes;
