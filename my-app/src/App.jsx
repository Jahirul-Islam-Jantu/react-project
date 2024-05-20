import React from "react";

const App = () => {
  return (
    <div>
      <h1>Hello World! </h1>
      {(() => {
        let newHours = new Date().getHours();
        let newMinutes = new Date().getMinutes();
        let newSec = new Date().getSeconds();

        let timeNow = `${newHours} : ${newMinutes} : ${newSec}`;

        return timeNow;
      })()}
    </div>
  );
};

export default App;
