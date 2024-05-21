import React, { useRef } from "react";

const UseRefWithoutCurrent = () => {
  let myRef = useRef();
  const change = () => {
    myRef.innerHTML =
      "<ol><li>Hello React Hook without current! </li><li>Hello React Hook without current! </li></ol>";
  };
  return (
    <div>
      <h1 ref={(h1) => (myRef = h1)}>My React hook Headline</h1>
      <button onClick={change}>Click here</button>
    </div>
  );
};

export default UseRefWithoutCurrent;
