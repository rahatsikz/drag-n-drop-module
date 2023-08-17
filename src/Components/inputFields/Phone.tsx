const Phone = () => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Phone</span>
      </label>
      <input
        type="number"
        placeholder="Type here"
        className="input input-bordered focus:outline-none w-full"
      />
    </div>
  );
};

export default Phone;
