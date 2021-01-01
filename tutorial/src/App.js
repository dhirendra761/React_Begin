import React from "react";

//import Styles from "./App.module.css"
import ComponentDidUpdate from "./ComponentDidUpdate";
import HideAndShow from "./HideAndShow";
import Home from "./Home";
import Profile from "./Profile";
import UnMountToggle from "./UnMountToggle";
import Forms from "./Forms";
import FormValidation from "./FormValidation";

function App() {
  return (
    <div className="App">
      {/* <header>React Tutorial</header>*/}
      {/* <Home employee={{ name: "Dhirendra", empId: 1001 }} /> */}
      {/* <Profile text="This is from APP" data={{ id: 10, name: "Dhirendra" }} />  */}
      <HideAndShow />
      {/* <ComponentDidUpdate /> */}
      {/* <UnMountToggle /> */}
      {/* <Forms/> */}
      {/* <FormValidation/> */}
      {/* {React.createElement("h1", { className: "head-tag" }, "Hello JSX")} */}
    </div>
  );
}

export default App;
