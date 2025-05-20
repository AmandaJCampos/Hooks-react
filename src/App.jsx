import { useState } from 'react';

export default function App() {
  // Hook (é em JavaScript)
  const [isVisible, setVisible] = useState(false);

  // Alterna entre as visibilidades (true ou false)
  function toggleVisibilidade() { //alternarVisibilidade
    setVisible(!isVisible);
  }

  return (
    // JSX, somente HTML, JavaScript dentro de {chaves}
    <div>
      <h1>React Hooks</h1>


      {/* Botão para ícone senha mostrar/esconder : continuar clicando */}
      <button onMouseDown={toggleVisibilidade} onMouseUp={toggleVisibilidade}>
        {isVisible ? 'Esconder' : 'Mostrar'}
      </button>

      {isVisible && <p>Esta é a mensagem!</p>}
    </div>
  )
}
