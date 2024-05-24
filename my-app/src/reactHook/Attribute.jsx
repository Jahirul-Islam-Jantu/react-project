import { useRef } from "react";

const Attribute = () => {
  let myImg = useRef();
  const change = () => {
    myImg.current.src = "https://picsum.photos/700/300";
    myImg.current.setAttribute("height", "100px");
    myImg.current.setAttribute("width", "300px");
  };
  return (
    <div>
      <img
        ref={myImg}
        src="https://picsum.photos/seed/picsum/800/400"
        alt="MyImage"
      />
      <button onClick={change}>Change It</button>
    </div>
  );
};

export default Attribute;
