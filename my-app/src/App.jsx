import TimeMap from "./reactHook/TimeMap";
import ChangeInput from "./reactHook/ChangeInput";
import UseRef from "./reactHook/UseRef";
import TimeNow from "./reactHook/TimeNow";
import UseRefWithoutCurrent from "./reactHook/UseRefWithoutCurrent";
import Attribute from "./reactHook/Attribute";

const App = () => {
  return (
    <div>
      <TimeNow />
      <ChangeInput />
      <TimeMap />
      <UseRef />
      <UseRefWithoutCurrent />
      <Attribute />
    </div>
  );
};

export default App;
