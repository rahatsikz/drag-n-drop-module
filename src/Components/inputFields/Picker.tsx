const Picker = () => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Pick List</span>
      </label>
      <div className="input-group">
        <select className="select select-bordered focus:outline-none w-full">
          <option defaultValue={"all"}>Choose Your Marital Status</option>
          <option value={"married"}>Married</option>
          <option value={"single"}>Single</option>
          <option value={"divorced"}>Divorced</option>
        </select>
      </div>
    </div>
  );
};

export default Picker;
