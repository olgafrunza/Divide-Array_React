import React from "react";

const Divider = ({ arr }) => {
  const middle = Math.floor(arr.length / 2);
  const firstSlice = arr.slice(0, middle);
  const secondSlice = arr.slice(middle);
  return (
    <>
      <p className="centeredRow">{`[${arr}]`}</p>
      {arr.length !== 1 && (
        <div className="centeredRow">
          <div className="centeredColumn">
            <Divider arr={firstSlice} />
          </div>
          <div className="centeredColumn">
            <Divider arr={secondSlice} />
          </div>
        </div>
      )}
    </>
  );
};

export default Divider;
