import { useState } from "react";

const TodoApp = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const change = () => {
    list.push(item);
    setList([...list]);
  };
  return (
    <div>
      <h1 className="text-center">{list.length}</h1>

      <div className="input-group mb-3 row g-3 text-center">
        <span className="input-group-text col-auto rounded">
          {" "}
          Add your item{" "}
        </span>
        <input
          onChange={(e) => setItem(e.target.value)}
          className="form-control col-auto rounded d-flex justify-content-center"
          aria-label="With textarea"
        ></input>
        <button onClick={change} className="btn btn-success col-auto rounded">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
