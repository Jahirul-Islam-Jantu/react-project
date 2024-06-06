// import TimeMap from "./reactHook/TimeMap";
import ChangeInput from "./reactHook/ChangeInput";
// import UseRef from "./reactHook/UseRef";
import TimeNow from "./reactHook/TimeNow";
// import UseRefWithoutCurrent from "./reactHook/UseRefWithoutCurrent";
// import Attribute from "./reactHook/Attribute";
// import UseCss from "./reactHook/UseCss";
// import CachingData from "./reactHook/CachingData";
// import UseStateMethod from './reactHook/UseStateMethod';
// import StateObj from './reactHook/StateObj';
// import TodoApp from "./reactHook/TodoApp";
import NewToDo from "./reactHook/NewToDo";
import FormState from "./reactHook/FormState";

const App = () => {
  return (
    <div className="text-center">
      <TimeNow />

      {/* <ChangeInput /> */}

      {/* <TodoApp /> */}
      <NewToDo />
      <FormState />
      {/* <TimeMap />
      <UseRef />
      <UseRefWithoutCurrent />
      <Attribute />

      <UseCss />
      <CachingData />
      <UseStateMethod />
      <StateObj /> */}
    </div>
  );
};

export default App;
