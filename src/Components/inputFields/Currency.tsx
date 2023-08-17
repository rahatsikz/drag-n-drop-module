const Currency = () => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Enter Currency</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          placeholder="100"
          className="input input-bordered focus:outline-none w-full"
        />
        <span>USD</span>
      </label>
    </div>
  );
};

export default Currency;
