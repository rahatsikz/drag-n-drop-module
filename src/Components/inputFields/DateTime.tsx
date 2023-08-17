const DateTime = () => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Date and Time</span>
      </label>
      <input
        type="datetime-local"
        placeholder="Type here"
        className="input input-bordered focus:outline-none w-full"
      />
    </div>
  );
};

export default DateTime;
