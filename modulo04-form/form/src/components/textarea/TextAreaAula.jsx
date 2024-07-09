import React from "react";

const TextAreaAula = () => {
  const [textArea, setTextArea] = React.useState("");
  return (
    <form>
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        rows="5"
      />
      {textArea}
    </form>
  );
};

export default TextAreaAula;
