const TimeMap = () => {
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
      {(() => {
        const country = [
          "Bangladesh",
          "Australia",
          "Pakistan",
          "South Africa",
          "Canada",
          "Norway",
        ];
        return (
          <div>
            <ol>
              {country.map((item) => {
                return <li>{item}</li>;
              })}
            </ol>
          </div>
        );
      })()}
    </div>
  );
};

export default TimeMap;
