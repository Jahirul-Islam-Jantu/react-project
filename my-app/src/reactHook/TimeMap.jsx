const TimeMap = () => {
  return (
    <div >
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
          <div className="bg-secondary-subtle">
            <ul className="list-unstyled">
              {country.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        );
      })()}
    </div>
  );
};

export default TimeMap;
