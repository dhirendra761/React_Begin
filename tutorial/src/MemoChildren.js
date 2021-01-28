import React, { memo } from "react";

const MemoChildren = ({ data }) => {
  console.log("Children" + data);
  return (
    <div>
      <h1>Memo Children</h1>
    </div>
  );
};
export default memo(MemoChildren);
// export default MemoChildren;
