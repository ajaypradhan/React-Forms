import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [heading, setHeading] = useState();

  function handelChange(even) {
    setName(even.target.value);
  }
  function SubmitBtn() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        onChange={handelChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={SubmitBtn}>Submit</button>
    </div>
  );
}

export default App;
