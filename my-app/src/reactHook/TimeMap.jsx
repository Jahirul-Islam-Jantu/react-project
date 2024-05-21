const TimeMap = () => {
  return (
    <div>
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
