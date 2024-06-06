import React, { useEffect, useState } from "react";

const TimeNow = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  return (
    <div className="text-center container">
      <h1 className="text-success">
        Practice project of <span>REACT!</span>
      </h1>
      <h2 className="border border-success p-2 mb-2 border-opacity-50 ">
        {time.toLocaleTimeString()}
      </h2>
    </div>
  );
};

export default TimeNow;
