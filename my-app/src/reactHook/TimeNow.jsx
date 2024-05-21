import React, { useEffect, useState } from "react";

const TimeNow = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  return (
    <div>
      <h1>Hello World ! This is the time Now.</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default TimeNow;
