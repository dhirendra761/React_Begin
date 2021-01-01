import React from "react";

function Profile(props) {
  const {text,data}=props
  const click = () => {
    alert(text);
  };
const { id, name } = data;
  return (
    // <div>{React.createElement("h1", { className: "header" }, props.text)}</div>
    <div>
      <h1 onClick={click}>{text}</h1>
      <h1>{id}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default Profile;
