const UrlField = () => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Link</span>
      </label>
      <input
        type="url"
        placeholder="Enter Link"
        className="input input-bordered focus:outline-none w-full"
      />
    </div>
  );
};

export default UrlField;
