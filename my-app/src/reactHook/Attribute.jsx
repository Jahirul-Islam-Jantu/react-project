import { useRef } from "react";

const Attribute = () => {
  let myImg = useRef();
  const change = () => {
    myImg.current.src = "https://picsum.photos/700/300";
    myImg.current.setAttribute("height", "500px");
    myImg.current.setAttribute("width", "1500px");
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
