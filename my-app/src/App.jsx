import TimeMap from "./reactHook/TimeMap";
import UseRef from "./reactHook/UseRef";
import TimeNow from "./reactHook/TimeNow";

const App = () => {
  return (
    <div>
      <TimeNow />
      <TimeMap />
      <UseRef />
    </div>
  );
};

export default App;
