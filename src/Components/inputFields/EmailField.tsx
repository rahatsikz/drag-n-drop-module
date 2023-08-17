const EmailField = () => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        type="email"
        placeholder="Type here"
        className="input input-bordered focus:outline-none w-full"
      />
    </div>
  );
};

export default EmailField;
