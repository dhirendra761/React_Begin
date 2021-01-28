import React from "react";

//import Styles from "./App.module.css"
import ComponentDidUpdate from "./ComponentDidUpdate";
import HideAndShow from "./HideAndShow";
import Home from "./Home";
import Profile from "./Profile";
import UnMountToggle from "./UnMountToggle";
import Forms from "./Forms";
import FormValidation from "./FormValidation";
import FormEffect from "./FormEffect";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FetchAPIs from "./FetchAPIs";
import Others from "./Others";
import Refs from "./Refs";
import BootStrapModal from "./BootStrapModal";
import Users from "./Users";
import ErrorBound from "./ErrorBound";
import PureComponentJS from "./PureComponentJS";
import Memo from "./Memo";
import Uncontrolled from "./Uncontrolled";
import CustomeHooks from "./CustomeHooks";

function App() {
  return (
    <div className="App">
      {/* <header>React Tutorial</header>*/}
      {/* <Home employee={{ name: "Dhirendra", empId: 1001 }} /> */}
      {/* <Profile text="This is from APP" data={{ id: 10, name: "Dhirendra" }} />  */}
      {/* <HideAndShow /> */}
      {/* <ComponentDidUpdate /> */}
      {/* <UnMountToggle /> */}
      {/* <Forms /> */}
      {/* <FormValidation /> */}
      {/* {React.createElement("h1", { className: "head-tag" }, "Hello JSX")} */}
      {/* <FormEffect /> */}
      {/* <Router>
        <Link to="">HideAndShow</Link>
        <Link to="/Forms">/ Forms</Link>
        <Link to="/FormValidation">/ FormValidation</Link>
        <Route exact path="/" component={HideAndShow} />
        <Route path="/Forms" component={Forms} />
        <Route path="/FormValidation" component={FormValidation} />
        {/* <HideAndShow />
        <Forms />
        <Home /> *
      </Router> */}
      {/* <FetchAPIs /> */}
      {/* <Others /> */}
      {/* <Refs /> */}
      {/* <BootStrapModal /> */}
      {/* <ErrorBound>
        <Users />
      </ErrorBound> */}
      {/* <PureComponentJS /> */}
      {/* <Memo /> */}
      {/* <Uncontrolled /> */}
      <CustomeHooks />
    </div>
  );
}

export default App;
