import React, { version } from "react";

const UseRefAula = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");

  const inputElement = React.useRef();

  const handleClick = () => {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  };

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        ref={inputElement}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default UseRefAula;
