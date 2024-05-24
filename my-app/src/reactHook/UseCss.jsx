import { useRef } from "react";

const UseCss = () => {
  let myHline = useRef();
  const change = () => {
    myHline.current.classList.remove("text-success");
    myHline.current.classList.add("text-danger");

  };

  return (
    <div className="text-center">
      <h1 className="text-success text-center fs-1" ref={myHline}>
        This is Normal headline
      </h1>
      <button className=" btn btn-success " onClick={change}>
        Click me
      </button>
    </div>
  );
};

export default UseCss;
