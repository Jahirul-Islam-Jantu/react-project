import { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default HookUseEffect;
