import { useRef } from "react";

const UseRef = () => {
  let myHeadline = useRef();

  const change = () => {
    myHeadline.current.innerHTML = "Hello React Hook!";
  };
  return (
    <div>
      <h1 ref={myHeadline}>My React hook Headline</h1>
      <button onClick={change}>Click here</button>
    </div>
  );
};

export default UseRef;
