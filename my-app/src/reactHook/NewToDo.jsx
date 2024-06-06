import { useState } from "react";

const NewToDo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    list.push(item);
    setList([...list]);
  };
  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Item"
        className="p-2 mb-2"
        onChange={(e) => setItem(e.target.value)}
      />{" "}
      <br />
      <button onClick={addItem}>ADD Item</button>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NewToDo;
