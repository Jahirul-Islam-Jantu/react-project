import { useState } from "react";

const FormState = () => {
  let [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const InputOnChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
  };

  return (
    <div className="container">
      <form onSubmit={SubmitForm}>
        <input
          onChange={(e) => {
            InputOnChange("fName", e.target.value);
          }}
          value={formObj.fName}
          placeholder="First Name"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            InputOnChange("lName", e.target.value);
          }}
          value={formObj.lName}
          placeholder="Last Name"
        />{" "}
        <br />
        <select
          onChange={(e) => {
            InputOnChange("city", e.target.value);
          }}
          value={formObj.city}
        >
          <option value="Choose City">Choose City</option>
          <option value="Dhaka">Dhaka </option>
          <option value="Narayangonj">Narayangonj</option>
        </select>
        <br />
        <input
          onChange={() => {
            InputOnChange("gender", "Male");
          }}
          checked={formObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male <br />
        <input
          onChange={() => {
            InputOnChange("gender", "Female");
          }}
          checked={formObj.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormState;
