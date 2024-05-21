import TimeMap from "./reactHook/TimeMap";
import UseRef from "./reactHook/UseRef";
import TimeNow from "./reactHook/TimeNow";
import UseRefWithoutCurrent from "./reactHook/UseRefWithoutCurrent";

const App = () => {
  return (
    <div>
      <TimeNow />
      <TimeMap />
      <UseRef />
      <UseRefWithoutCurrent />
    </div>
  );
};

export default App;
