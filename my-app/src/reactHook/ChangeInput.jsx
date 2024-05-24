import { useRef } from "react";

const ChangeInput = () => {
  let name,
    email,
    mobile,
    password = useRef();
  const onchange = () => {
    let nam = name.value;
    let mail = email.value;
    let ph = mobile.value;
    let pass = password.value;

    alert(`
    First Name: ${nam} 
    Email: ${mail}
    Mobile Number: ${ph}
    Password: ${pass}
    `);
  };
  return (
    <div>
      <input type="text" placeholder="Name" ref={(a) => (name = a)} /> <br />{" "}
      <br />
      <input
        type="email"
        placeholder="Email"
        ref={(a) => (email = a)}
      /> <br /> <br />
      <input
        type="Phone"
        placeholder="Phone Number"
        ref={(a) => (mobile = a)}
      />{" "}
      <br /> <br />
      <input
        type="password"
        placeholder="Password"
        ref={(a) => (password = a)}
      />{" "}
      <br /> <br />
      <button type="Submit" onClick={onchange}>
        Submit
      </button>
    </div>
  );
};

export default ChangeInput;
