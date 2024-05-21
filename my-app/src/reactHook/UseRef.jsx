import { useRef } from "react";

const UseRef = () => {
  let myHeadline = useRef();
  myHeadline.current.innerHtml = "Hello React Hook!";
  return (
    <div>
      <h1 ref={myHeadline}>My React hook Headline</h1>
    </div>
  );
};

export default UseRef;
