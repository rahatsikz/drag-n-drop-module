import React from "react";

const Number = () => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Number</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered focus:outline-none w-full"
      />
    </div>
  );
};

export default Number;
