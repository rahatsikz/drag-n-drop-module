const User = () => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">User</span>
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        className="input input-bordered focus:outline-none w-full"
      />
    </div>
  );
};

export default User;
