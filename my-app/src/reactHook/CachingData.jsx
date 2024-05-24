import { useRef } from "react";

const CachingData = () => {
  let APIData = useRef(null);
  let myPTag = useRef();
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    APIData.current = await response.json();
  };
  const showData = () => {
    myPTag.current.innerText = JSON.stringify(APIData.current);
  };
  return (
    <div>
      <p ref={myPTag} className="bg-success-subtle border"></p>
      <button className="btn btn-primary" onClick={fetchData}>
        Get data
      </button>
      <button className="btn btn-info" onClick={showData}>
        Show data
      </button>
    </div>
  );
};

export default CachingData;
