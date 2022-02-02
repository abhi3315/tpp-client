import React, { useState } from "react";

function HelloWorld() {
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      {!submit ? (
        <>
          <input
            type="text"
            onChange={({ target }) => setInput(target.value)}
          />
          <button onClick={() => setSubmit(true)}>submit</button>
        </>
      ) : (
        <h3>Hello, {input}</h3>
      )}
    </>
  );
}

export default HelloWorld;
